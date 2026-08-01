import { mainClient } from '@/common/apis/ttockTtockClient';
import { API } from '@/common/constants/endpoints';
import { saveUserSession } from '@/components/login/api';
import type {
  ApiResponse,
  AuthSession,
  GoogleLoginData,
  GoogleOnboardingBody,
} from '@/components/login/model';

/** 구글 ID 토큰으로 로그인. 신규 사용자면 needsOnboarding: true가 내려온다. */
export const postGoogleLogin = async (idToken: string) => {
  const response = await mainClient.post<ApiResponse<GoogleLoginData>>(API.USER.GOOGLE_LOGIN, {
    idToken,
  });

  if (!response.data.needsOnboarding) {
    saveUserSession(response.data);
  }

  return response;
};

/** 신규 사용자의 약관 동의 + 이름을 제출해 가입을 마치고 로그인한다. */
export const postGoogleOnboarding = async (body: GoogleOnboardingBody) => {
  const response = await mainClient.post<ApiResponse<AuthSession>>(
    API.USER.GOOGLE_ONBOARDING,
    body,
  );

  saveUserSession(response.data);

  return response;
};
