import { BASE_URL } from '@/common/apis/ttockTtockClient';
import { CustomHttpError } from '@/common/apis/apiClient';
import { API } from '@/common/constants/endpoints';
import type {
  ApiResponse,
  AuthSession,
  GoogleLoginData,
  GoogleOnboardingBody,
} from '@/components/login/model';

/**
 * 구글 OAuth 엔드포인트는 인증이 필요 없다.
 * mainClient는 localStorage의 액세스 토큰을 자동으로 붙이므로,
 * 만료된 토큰이 섞여 401이 나는 것을 막기 위해 fetch를 직접 사용한다.
 */
const postWithoutAuth = async <T>(path: string, body: unknown): Promise<ApiResponse<T>> => {
  const response = await fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new CustomHttpError(`HTTP ${response.status}: ${response.statusText}`, response.status);
  }

  return (await response.json()) as ApiResponse<T>;
};

const saveUserSession = (session: AuthSession) => {
  localStorage.setItem('name', session.user.name);
  localStorage.setItem('user_access_token', session.accessToken);
  localStorage.setItem('user_refresh_token', session.refreshToken);
};

/** 구글 ID 토큰으로 로그인. 신규 사용자면 needsOnboarding: true가 내려온다. */
export const postGoogleLogin = async (idToken: string) => {
  const response = await postWithoutAuth<GoogleLoginData>(API.USER.GOOGLE_LOGIN, {
    idToken,
  });

  if (!response.data.needsOnboarding) {
    saveUserSession(response.data);
  }

  return response;
};

/** 신규 사용자의 약관 동의 + 이름을 제출해 가입을 마치고 로그인한다. */
export const postGoogleOnboarding = async (body: GoogleOnboardingBody) => {
  const response = await postWithoutAuth<AuthSession>(API.USER.GOOGLE_ONBOARDING, body);

  saveUserSession(response.data);

  return response;
};
