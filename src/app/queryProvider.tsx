'use client';

import { CustomHttpError } from '@/common/apis/apiClient';
import { HTTP_STATUS } from '@/common/constants/httpStatus';
import { ROUTES } from '@/common/constants/routes';
import { isAdminPath } from '@/common/util/isAdminPath';
import { postAdminRefresh } from '@/components/admin/login/api/login';
import { postRefresh } from '@/components/login/api';
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
        throwOnError: true,
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
  if (retriedMutations.has(mutation)) {
    return;
  }
  if (
    err instanceof CustomHttpError &&
    (err.status === HTTP_STATUS.UNAUTHORIZED || err.status === HTTP_STATUS.FORBIDDEN)
  ) {
    retriedMutations.add(mutation);

    const isAdmin = isAdminPath();
    try {
      if (isAdmin) {
        await postAdminRefresh();
      } else {
        await postRefresh();
      }
      await mutation.execute(variables);
    } catch (error) {
      if (typeof window !== 'undefined') {
        alert('세션이 만료되었습니다. 다시 로그인해주세요.');
        console.error('토큰 재발급 실패:', error);

        if (isAdmin) {
          window.location.href = ROUTES.ADMIN_LOGIN;
        } else {
          window.location.href = ROUTES.LOGIN;
        }
      }
      return;
    }
  }
  if (err instanceof CustomHttpError && typeof window !== 'undefined') {
    alert('알 수 없는 에러가 발생했습니다. 다시 시도해주세요.');
    return;
  }
}

const retriedQueries = new WeakSet<Query<unknown, unknown, unknown>>();
async function handleQueryError(error: Error, query: Query<unknown, unknown, unknown>) {
  const err = error as CustomHttpError;
  if (retriedQueries.has(query)) {
    return;
  }
  if (
    err instanceof CustomHttpError &&
    (err.status === HTTP_STATUS.UNAUTHORIZED || err.status === HTTP_STATUS.FORBIDDEN)
  ) {
    retriedQueries.add(query);
    const isAdmin = isAdminPath();

    try {
      if (isAdmin) {
        await postAdminRefresh();
      } else {
        await postRefresh();
      }
      await query.fetch();
    } catch (error) {
      if (typeof window !== 'undefined') {
        alert('세션이 만료되었습니다. 다시 로그인해주세요.');

        if (isAdmin) {
          window.location.href = ROUTES.ADMIN_LOGIN;
        } else {
          window.location.href = ROUTES.LOGIN;
        }
      }
      throw error;
    }
  }
  if (err instanceof CustomHttpError && typeof window !== 'undefined') {
    alert('알 수 없는 에러가 발생했습니다. 다시 시도해주세요.');
    throw err;
  }
}

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
