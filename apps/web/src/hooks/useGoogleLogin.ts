import { useCallback, useState } from 'react';
import { useRouter } from 'next/navigation';
import { CustomHttpError } from '@/common/apis/apiClient';
import { HTTP_STATUS } from '@/common/constants/httpStatus';
import { GA_EVENTS, GA_METHODS } from '@/common/constants/gaEvents';
import { MESSAGE } from '@/common/constants/message';
import { ROUTES } from '@/common/constants/routes';
import { postGoogleLogin, postGoogleOnboarding } from '@/components/login/api/google';
import type { GoogleLoginNeedsOnboarding } from '@/components/login/model';
import { initializeAndSendFCMToken } from '@/fcm/fcmToken';
import { trackGAEvent } from '@/lib/ga';

type OnboardingState = Omit<GoogleLoginNeedsOnboarding, 'needsOnboarding'>;

const getLoginErrorMessage = (error: unknown) => {
  if (error instanceof CustomHttpError) {
    switch (error.status) {
      case HTTP_STATUS.UNAUTHORIZED:
        return MESSAGE.googleLogin.invalidToken;
      case HTTP_STATUS.BAD_REQUEST:
        return MESSAGE.googleLogin.emailNotVerified;
      case HTTP_STATUS.CONFLICT:
        return MESSAGE.googleLogin.alreadyLinked;
    }
  }
  return MESSAGE.googleLogin.failed;
};

export const useGoogleLogin = () => {
  const router = useRouter();
  const [onboarding, setOnboarding] = useState<OnboardingState | null>(null);
  const [completedSignupName, setCompletedSignupName] = useState('');
  const [isPending, setIsPending] = useState(false);

  const completeLogin = useCallback(() => {
    // FCM 토큰은 백그라운드에서 처리되므로 await하지 않는다.
    initializeAndSendFCMToken().catch((error) => {
      console.error('FCM 토큰 초기화 실패:', error);
    });
    router.push(ROUTES.HOME);
  }, [router]);

  /** GIS 콜백에서 받은 ID 토큰으로 로그인한다. */
  const handleCredential = useCallback(
    async (idToken: string) => {
      if (!idToken) {
        alert(MESSAGE.googleLogin.invalidToken);
        return;
      }

      setIsPending(true);
      setCompletedSignupName('');
      try {
        const response = await postGoogleLogin(idToken);

        if (response.data.needsOnboarding) {
          const { onboardingToken, email, suggestedName } = response.data;
          setOnboarding({ onboardingToken, email, suggestedName });
          trackGAEvent(GA_EVENTS.GOOGLE_SIGNUP_START, { method: GA_METHODS.GOOGLE });
          return;
        }

        trackGAEvent(GA_EVENTS.LOGIN, { method: GA_METHODS.GOOGLE });
        completeLogin();
      } catch (error) {
        console.error('구글 로그인 실패:', error);
        alert(getLoginErrorMessage(error));
      } finally {
        setIsPending(false);
      }
    },
    [completeLogin],
  );

  const cancelOnboarding = useCallback(() => {
    setOnboarding(null);
    setCompletedSignupName('');
  }, []);

  /** 약관 동의 + 이름을 제출해 가입을 마친다. 온보딩 토큰이 만료되면 구글 로그인부터 다시 시작한다. */
  const submitOnboarding = useCallback(
    async (name: string) => {
      if (!onboarding) {
        return;
      }

      setIsPending(true);
      try {
        await postGoogleOnboarding({
          onboardingToken: onboarding.onboardingToken,
          termsAgreed: true,
          name,
        });

        trackGAEvent(GA_EVENTS.SIGN_UP, { method: GA_METHODS.GOOGLE });
        setCompletedSignupName(name);
        setOnboarding(null);
      } catch (error) {
        console.error('구글 회원가입 실패:', error);

        if (error instanceof CustomHttpError && error.status === HTTP_STATUS.BAD_REQUEST) {
          alert(MESSAGE.googleLogin.onboardingInvalid);
          return;
        }

        // 401(온보딩 토큰 만료/무효), 409(이상 상태) 모두 구글 로그인부터 다시 시작해야 한다.
        if (error instanceof CustomHttpError && error.status === HTTP_STATUS.CONFLICT) {
          alert(MESSAGE.googleLogin.onboardingConflict);
        } else {
          alert(MESSAGE.googleLogin.onboardingExpired);
        }
        setOnboarding(null);
      } finally {
        setIsPending(false);
      }
    },
    [onboarding],
  );

  return {
    onboarding,
    completedSignupName,
    isPending,
    handleCredential,
    submitOnboarding,
    cancelOnboarding,
    completeLogin,
  };
};
