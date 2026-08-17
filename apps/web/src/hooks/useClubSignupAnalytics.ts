import { useCallback, useRef } from 'react';
import { GA_EVENTS } from '@/common/constants/gaEvents';
import { trackGAEvent } from '@/lib/ga';

export const useClubSignupAnalytics = () => {
  const hasTrackedSignupStart = useRef(false);

  const trackSignupStart = useCallback(() => {
    if (hasTrackedSignupStart.current) {
      return;
    }

    hasTrackedSignupStart.current = true;
    trackGAEvent(GA_EVENTS.CLUB_SIGNUP_START);
  }, []);

  const trackSignupSubmit = useCallback(() => {
    trackSignupStart();
    trackGAEvent(GA_EVENTS.CLUB_SIGNUP_SUBMIT);
  }, [trackSignupStart]);

  const trackSignupSuccess = useCallback(() => {
    trackGAEvent(GA_EVENTS.CLUB_SIGNUP_SUCCESS);
  }, []);

  return {
    trackSignupStart,
    trackSignupSubmit,
    trackSignupSuccess,
  };
};
