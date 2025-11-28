'use client';

import { CustomHttpError } from '@/common/apis/apiClient';
import { HTTP_STATUS } from '@/common/constants/httpStatus';
import { MESSAGE } from '@/common/constants/message';
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

// alert 중복 방지를 위한 전역 플래그
let isShowingAuthAlert = false;

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
      if (typeof window !== 'undefined' && !isShowingAuthAlert) {
        isShowingAuthAlert = true;

        // refresh token 존재 여부로 로그인 상태 확인
        const refreshToken = isAdmin
          ? localStorage.getItem('admin_refresh_token')
          : localStorage.getItem('user_refresh_token');

        const alertMessage = refreshToken
          ? MESSAGE.auth.sessionExpired
          : MESSAGE.auth.loginRequired;

        alert(alertMessage);
        console.error('토큰 재발급 실패:', error);

        if (isAdmin) {
          window.location.href = ROUTES.ADMIN_LOGIN;
          localStorage.clear();
        } else {
          window.location.href = ROUTES.LOGIN;
          localStorage.clear();
        }
      }
      return;
    }
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
      retriedQueries.delete(query);
    } catch (error) {
      retriedQueries.delete(query);
      if (typeof window !== 'undefined' && !isShowingAuthAlert) {
        isShowingAuthAlert = true;

        // refresh token 존재 여부로 로그인 상태 확인
        const refreshToken = isAdmin
          ? localStorage.getItem('admin_refresh_token')
          : localStorage.getItem('user_refresh_token');

        const alertMessage = refreshToken
          ? MESSAGE.auth.sessionExpired
          : MESSAGE.auth.loginRequired;

        console.error('토큰 재발급 실패:', error);
        alert(alertMessage);

        if (isAdmin) {
          window.location.href = ROUTES.ADMIN_LOGIN;
          localStorage.clear();
        } else {
          window.location.href = ROUTES.LOGIN;
          localStorage.clear();
        }
      }
      return;
    }
  }
}

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
