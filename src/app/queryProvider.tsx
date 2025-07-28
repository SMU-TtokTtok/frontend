'use client';

import { CustomHttpError } from '@/common/apis/apiClient';
import { ROUTES } from '@/common/constants/routes';
import { isAdminPath } from '@/common/util/isAdminPath';
import { postAdminRefresh } from '@/components/admin/login/api/login';
import {
  defaultShouldDehydrateQuery,
  isServer,
  Mutation,
  MutationCache,
  Query,
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 60 * 1000,
        retry: 1,
      },

      dehydrate: {
        shouldDehydrateQuery: (query) =>
          defaultShouldDehydrateQuery(query) || query.state.status === 'pending',
      },
    },
    queryCache: new QueryCache({ onError: handleQueryError }),
    mutationCache: new MutationCache({ onError: handleMutationError }),
  });
}

let browserQueryClient: QueryClient | undefined = undefined;
export function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

const retriedMutations = new WeakSet<Mutation<unknown, unknown, unknown>>();
async function handleMutationError(
  error: Error,
  variables: unknown,
  context: unknown,
  mutation: Mutation<unknown, unknown, unknown>,
) {
  const err = error as CustomHttpError;
  if (err instanceof CustomHttpError && (err.status === 401 || err.status === 403)) {
    if (retriedMutations.has(mutation)) {
      return;
    }

    retriedMutations.add(mutation);

    const isAdmin = isAdminPath();
    try {
      if (isAdmin) {
        await postAdminRefresh();
      }
      await mutation.execute(variables);
    } catch (error) {
      console.error('토큰 재발급 실패:', error);
      alert('세션이 만료되었습니다. 다시 로그인해주세요.');

      if (isAdmin) {
        window.location.href = ROUTES.ADMIN_LOGIN;
      } else {
        window.location.href = ROUTES.LOGIN;
      }
      return;
    }
  } else {
    alert('요청 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
  }
  throw error;
}

const retriedQueries = new WeakSet<Query<unknown, unknown, unknown>>();
async function handleQueryError(error: Error, query: Query<unknown, unknown, unknown>) {
  const err = error as CustomHttpError;
  if (err instanceof CustomHttpError && (err.status === 401 || err.status === 403)) {
    if (retriedQueries.has(query)) {
      return;
    }
    retriedQueries.add(query);
    const isAdmin = isAdminPath();

    try {
      if (isAdmin) {
        await postAdminRefresh();
      }
      await query.fetch();
    } catch (error) {
      console.error('토큰 재발급 실패:', error);
      alert('세션이 만료되었습니다. 다시 로그인해주세요.');
      if (isAdmin) {
        window.location.href = ROUTES.ADMIN_LOGIN;
      } else {
        window.location.href = ROUTES.LOGIN;
      }
      return;
    }
  } else {
    alert('요청 처리 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
  }
  throw error;
}

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
