export interface UserProfile {
  id: string;
  email: string;
  name: string;
  isEmailVerified: boolean;
  termsAgreed: boolean;
}

export interface AuthSession {
  accessToken: string;
  refreshToken: string;
  user: UserProfile;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

/** 기존 계정이거나 이메일이 같아 자동 연동된 경우 - 바로 로그인 완료 */
export interface GoogleLoginCompleted extends AuthSession {
  needsOnboarding: false;
}

/** 신규 계정 - 약관 동의 + 이름 입력이 필요한 경우 */
export interface GoogleLoginNeedsOnboarding {
  needsOnboarding: true;
  onboardingToken: string;
  email: string;
  suggestedName: string;
}

export type GoogleLoginData = GoogleLoginCompleted | GoogleLoginNeedsOnboarding;

export interface GoogleOnboardingBody {
  onboardingToken: string;
  termsAgreed: boolean;
  name: string;
}
