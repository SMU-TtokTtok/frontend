import { test, TestContext } from 'node:test';
import assert from 'node:assert/strict';
import { createElement, ComponentType } from 'react';
import { renderToString } from 'react-dom/server';
import { QueryClient, QueryClientProvider, QueryObserver } from '@tanstack/react-query';
import { CustomHttpError } from '@/common/apis/apiClient';
import { applicationFormKey } from './queries/key';
import { adminFormQueryOptions, useAdminForm, useHasApplicants } from './useAdminForm';

const form = (formId: string, hasApplicants = false) => ({
  formId,
  title: formId,
  subTitle: '',
  questions: [],
  hasApplicants,
});

const createClient = (t: TestContext) => {
  const client = new QueryClient({
    defaultOptions: {
      queries: { staleTime: 60_000, retry: 1, retryDelay: 0, throwOnError: true },
    },
  });
  t.after(() => client.clear());
  return client;
};

const render = (client: QueryClient, Probe: ComponentType) =>
  renderToString(createElement(QueryClientProvider, { client }, createElement(Probe)));

test('동아리를 전환하면 새 폼을 조회하고 같은 동아리는 캐시를 재사용한다', async (t) => {
  const client = createClient(t);
  const fetch = t.mock.method(globalThis, 'fetch', async (input: RequestInfo | URL) =>
    Response.json(String(input).endsWith('/club-a') ? form('form-a', true) : form('form-b')),
  );

  assert.equal((await client.fetchQuery(adminFormQueryOptions('club-a'))).formId, 'form-a');
  assert.equal((await client.fetchQuery(adminFormQueryOptions('club-b'))).formId, 'form-b');
  assert.equal((await client.fetchQuery(adminFormQueryOptions('club-a'))).formId, 'form-a');
  assert.equal(fetch.mock.callCount(), 2);

  function Form() {
    return useAdminForm('club-b').data?.formId;
  }
  function HasApplicants() {
    return String(useHasApplicants('club-b'));
  }
  assert.equal(render(client, Form), 'form-b');
  assert.equal(render(client, HasApplicants), 'false');
  assert.equal(fetch.mock.callCount(), 2);
});

test('A 동아리의 응답이 늦게 도착해도 B 동아리의 캐시를 덮어쓰지 않는다', async (t) => {
  const client = createClient(t);
  let resolveA: ((response: Response) => void) | undefined;
  const responseA = new Promise<Response>((resolve) => {
    resolveA = resolve;
  });
  t.mock.method(globalThis, 'fetch', (input: RequestInfo | URL) =>
    String(input).endsWith('/club-a') ? responseA : Promise.resolve(Response.json(form('form-b'))),
  );

  const requestA = client.fetchQuery(adminFormQueryOptions('club-a'));
  assert.equal((await client.fetchQuery(adminFormQueryOptions('club-b'))).formId, 'form-b');
  assert.ok(resolveA);
  resolveA(Response.json(form('form-a', true)));
  await requestA;
  assert.equal(client.getQueryData(adminFormQueryOptions('club-b').queryKey)?.formId, 'form-b');
});

test('동아리 ID가 없으면 이전 폼을 반환하거나 API를 호출하지 않는다', async (t) => {
  const client = createClient(t);
  client.setQueryData(adminFormQueryOptions('club-a').queryKey, form('form-a', true));
  const fetch = t.mock.method(globalThis, 'fetch', async () => Response.json(form('unexpected')));
  const observer = new QueryObserver(client, adminFormQueryOptions(''));
  const unsubscribe = observer.subscribe(() => {});
  t.after(unsubscribe);
  await new Promise<void>((resolve) => setImmediate(resolve));

  assert.equal(observer.getCurrentResult().data, undefined);
  assert.equal(fetch.mock.callCount(), 0);
});

test('기존 폼 수정·평가 종료의 무효화 키로 동아리별 폼을 다시 조회한다', async (t) => {
  const client = createClient(t);
  const fetch = t.mock.method(globalThis, 'fetch', async () => Response.json(form('before')));
  const optionsA = adminFormQueryOptions('club-a');
  const optionsB = adminFormQueryOptions('club-b');
  await Promise.all([client.fetchQuery(optionsA), client.fetchQuery(optionsB)]);

  fetch.mock.mockImplementation(async () => Response.json(form('after')));
  await client.invalidateQueries({ queryKey: [applicationFormKey.adminFormInfo] });
  assert.equal((await client.fetchQuery(optionsA)).formId, 'after');
  assert.equal((await client.fetchQuery(optionsB)).formId, 'after');
  assert.equal(fetch.mock.callCount(), 4);
});

test('지원자 유무 조회도 한 번 재시도하고 실패 시 화면을 막지 않는다', async (t) => {
  const client = createClient(t);
  const fetch = t.mock.method(globalThis, 'fetch', async () => new Response(null, { status: 500 }));
  function HasApplicants() {
    return String(useHasApplicants('club-a'));
  }
  function Form() {
    return useAdminForm('club-a').data?.formId;
  }

  assert.equal(render(client, HasApplicants), 'false');
  const query = client.getQueryCache().find({ queryKey: adminFormQueryOptions('club-a').queryKey });
  assert.ok(query);
  await assert.rejects(query.fetch(), CustomHttpError);
  assert.equal(fetch.mock.callCount(), 2);
  assert.equal(render(client, HasApplicants), 'false');
  assert.throws(() => render(client, Form), CustomHttpError);
});

test('지원자 유무 조회가 일시 실패 후 복구되면 실제 지원자 유무를 표시한다', async (t) => {
  const client = createClient(t);
  let requests = 0;
  t.mock.method(globalThis, 'fetch', async () => {
    requests += 1;
    return requests === 1 ? new Response(null, { status: 500 }) : Response.json(form('form-a', true));
  });
  function HasApplicants() {
    return String(useHasApplicants('club-a'));
  }

  assert.equal(render(client, HasApplicants), 'false');
  const query = client.getQueryCache().find({ queryKey: adminFormQueryOptions('club-a').queryKey });
  assert.ok(query);
  await query.fetch();
  assert.equal(requests, 2);
  assert.equal(render(client, HasApplicants), 'true');
});
