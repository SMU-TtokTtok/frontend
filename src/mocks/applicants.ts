import { http, HttpResponse } from 'msw';
import applicantList from './applicantList.json';
import applicantInfo from './applicantInfo.json';
import { API } from '@/common/constants/endpoints';

const BASE_API = process.env.NEXT_PUBLIC_API_URL ?? '';

export const Applicants = http.get(`${BASE_API}/api/admin${API.ADMIN.APPLICANTS}`, () => {
  return HttpResponse.json(applicantList, { status: 200 });
});

export const PatchApplicantStatus = http.patch(
  `${BASE_API}${API.ADMIN.APPLICANTS_STATUS(':applicantId')}`,
  ({ params }) => {
    const { applicantId } = params;
    const status = 'EVALUATING';
    return HttpResponse.json({ id: applicantId, status }, { status: 200 });
  },
);

export const PassList = http.get(`${BASE_API}/api/admin${API.ADMIN.APPLICANTS_PASS}`, () => {
  return HttpResponse.json(applicantList, { status: 200 });
});

export const FailList = http.get(`${BASE_API}/api/admin${API.ADMIN.APPLICANTS_FAIL}`, () => {
  return HttpResponse.json(applicantList, { status: 200 });
});

export const ApplicantSearch = http.get(
  `${BASE_API}/api/admin${API.ADMIN.APPLICANTS_SEARCH}`,
  ({ request }) => {
    const url = new URL(request.url);
    const search = url.searchParams.get('name') || '';
    const rawSearch = search.trim();
    const filteredApplicants = applicantList.applicants.filter((applicant) =>
      applicant.name.includes(rawSearch),
    );

    return HttpResponse.json(filteredApplicants, { status: 200 });
  },
);

export const ApplicantInfo = http.get(
  `${BASE_API}/api/admin${API.ADMIN.APPLICANTS_DETAIL(':applicantId')}`,
  ({ params }) => {
    const { applicantId } = params;
    const applicant = applicantList.applicants?.find(
      (applicant) => applicant?.id === String(applicantId),
    );

    if (!applicant) {
      return HttpResponse.json({ message: 'Applicant not found' }, { status: 404 });
    }

    return HttpResponse.json(applicantInfo, { status: 200 });
  },
);
const mockMemos: { id: string; applicantId: string; content: string }[] = [];

export const PostMemo = http.post(
  `${BASE_API}/api/admin${API.ADMIN.APPLICANTS_MEMO_CREATE(':applicantId')}`,
  async ({ request, params }) => {
    const { applicantId } = params;
    const body = (await request.json()) as { content: string };

    const newMemo = {
      id: String(Date.now()),
      applicantId: String(applicantId),
      content: body.content,
    };
    mockMemos.push(newMemo);

    return HttpResponse.json(newMemo, { status: 201 });
  },
);

export const DeleteMemo = http.delete(
  `${BASE_API}/api/admin${API.ADMIN.APPLICANTS_MEMO_DELETE(':applicantId', ':memoId')}`,
  ({ params }) => {
    const { applicantId, memoId } = params;
    return HttpResponse.json(
      { message: `Memo ${memoId} deleted for applicant ${applicantId}` },
      { status: 200 },
    );
  },
);

export const PatchMemo = http.patch(
  `${BASE_API}/api/admin${API.ADMIN.APPLICANTS_MEMO_UPDATE(':applicantId', ':memoId')}`,
  async ({ request, params }) => {
    const { applicantId, memoId } = params;
    const content = (await request.json()) as { content: string };

    return HttpResponse.json({ id: memoId, applicantId, content }, { status: 200 });
  },
);

export const PutConnectApplicant = http.put(
  `${BASE_API}/api/admin${API.ADMIN.APPLICANTS_CONNECTION(':clubId')}`,
  ({ params }) => {
    const { clubId } = params;
    return HttpResponse.json(
      { message: `Applicants connected for club ${clubId}` },
      { status: 200 },
    );
  },
);
