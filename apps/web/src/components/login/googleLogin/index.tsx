'use client';

import Script from 'next/script';
import { useCallback, useEffect, useRef, useState } from 'react';
import * as S from './googleLogin.css';

const GIS_SCRIPT_SRC = 'https://accounts.google.com/gsi/client';

/**
 * GIS의 width는 "최소" 너비이고 상한이 400px이다.
 * 슬롯보다 큰 값을 넘기면 그만큼 넘쳐 나오므로 항상 슬롯 너비 이하로 요청한다.
 */
const MAX_BUTTON_WIDTH = 400;

/**
 * width는 최소값이라 좁은 슬롯(긴 한글 라벨)에서는 요청값보다 실제로 더 넓게 그려질 수 있다.
 * ButtonSlot의 iframe이 100% 폭으로 고정돼 있어, 여유 없이 슬롯 너비 그대로 요청하면
 * 초과분이 iframe 안에서 오른쪽으로 잘려 보인다. 약간의 여백을 둬서 그 여지를 흡수한다.
 */
const BUTTON_WIDTH_SAFETY_MARGIN = 8;

interface GoogleLoginButtonProps {
  onCredential: (idToken: string) => void;
}

export default function GoogleLoginButton({ onCredential }: GoogleLoginButtonProps) {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const buttonSlotRef = useRef<HTMLDivElement>(null);
  const authAttemptStartedRef = useRef(false);
  const canRecoverAuthButtonRef = useRef(false);
  const resetTimerRef = useRef<number | undefined>(undefined);
  const recoveryTimerRef = useRef<number | undefined>(undefined);
  const [isScriptReady, setIsScriptReady] = useState(false);
  const [renderVersion, setRenderVersion] = useState(0);

  // 부모 리렌더로 콜백이 새로 만들어져도 GIS를 다시 초기화하지 않도록 ref로 고정한다.
  const onCredentialRef = useRef(onCredential);
  useEffect(() => {
    onCredentialRef.current = onCredential;
  }, [onCredential]);

  const clearRecoveryTimer = useCallback(() => {
    if (!recoveryTimerRef.current) return;

    window.clearTimeout(recoveryTimerRef.current);
    recoveryTimerRef.current = undefined;
  }, []);

  const queueButtonRender = useCallback((delay = 100) => {
    if (resetTimerRef.current) {
      window.clearTimeout(resetTimerRef.current);
    }

    resetTimerRef.current = window.setTimeout(() => {
      setRenderVersion((version) => version + 1);
    }, delay);
  }, []);

  const handleAuthAttemptStart = useCallback(() => {
    authAttemptStartedRef.current = true;
    canRecoverAuthButtonRef.current = false;
    clearRecoveryTimer();

    const isMobileLike =
      window.matchMedia(`(max-width: 1023px)`).matches || window.navigator.maxTouchPoints > 0;

    if (!isMobileLike) return;

    recoveryTimerRef.current = window.setTimeout(() => {
      canRecoverAuthButtonRef.current = true;
    }, 2500);
  }, [clearRecoveryTimer]);

  useEffect(() => {
    const resetButton = () => {
      if (document.visibilityState !== 'visible') return;
      if (!authAttemptStartedRef.current || !canRecoverAuthButtonRef.current) return;

      clearRecoveryTimer();
      authAttemptStartedRef.current = false;
      canRecoverAuthButtonRef.current = false;
      queueButtonRender();
    };

    window.addEventListener('focus', resetButton);
    window.addEventListener('pageshow', resetButton);
    document.addEventListener('visibilitychange', resetButton);

    return () => {
      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }

      clearRecoveryTimer();

      window.removeEventListener('focus', resetButton);
      window.removeEventListener('pageshow', resetButton);
      document.removeEventListener('visibilitychange', resetButton);
    };
  }, [clearRecoveryTimer, queueButtonRender]);

  // 화면 회전·리사이즈로 카드 폭이 바뀌면 버튼도 다시 그려야 한다.
  const [slotWidth, setSlotWidth] = useState(0);
  useEffect(() => {
    const buttonSlot = buttonSlotRef.current;
    if (!buttonSlot) return;

    const observer = new ResizeObserver(([entry]) => {
      setSlotWidth(Math.floor(entry.contentRect.width));
    });
    observer.observe(buttonSlot);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isScriptReady || !clientId || !window.google) {
      return;
    }

    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: ({ credential }) => {
        authAttemptStartedRef.current = false;
        canRecoverAuthButtonRef.current = false;
        clearRecoveryTimer();
        onCredentialRef.current(credential);
      },
      // 사용자가 인증을 완료하지 않고 중간 iframe/시트를 닫았을 때 GIS가 보내주는 공식 신호.
      // 타이머나 visibilitychange 추측 대신 이 콜백이 왔을 때만 버튼을 다시 그린다.
      // (그래야 2.5초 넘게 걸리는 정상 인증 도중에 iframe이 날아가는 일이 없다)
      intermediate_iframe_close_callback: () => {
        authAttemptStartedRef.current = false;
        canRecoverAuthButtonRef.current = false;
        clearRecoveryTimer();
        queueButtonRender();
      },
      auto_select: false,
      use_fedcm_for_button: false,
    });
  }, [isScriptReady, clientId, queueButtonRender]);

  useEffect(() => {
    const buttonSlot = buttonSlotRef.current;
    if (!isScriptReady || !clientId || !buttonSlot || !window.google || !slotWidth) {
      return;
    }

    // 다시 그릴 때 이전 버튼이 남지 않도록 비운다.
    buttonSlot.replaceChildren();

    window.google.accounts.id.renderButton(buttonSlot, {
      type: 'standard',
      theme: 'outline',
      size: 'large',
      text: 'signin_with',
      shape: 'rectangular',
      logo_alignment: 'center',
      locale: 'ko',
      width: Math.min(MAX_BUTTON_WIDTH, Math.max(0, slotWidth - BUTTON_WIDTH_SAFETY_MARGIN)),
      click_listener: handleAuthAttemptStart,
    });
  }, [isScriptReady, clientId, slotWidth, renderVersion, handleAuthAttemptStart]);

  if (!clientId) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn('NEXT_PUBLIC_GOOGLE_CLIENT_ID가 없어 구글 로그인 버튼을 숨깁니다.');
    }
    return null;
  }

  return (
    <div className={S.Container}>
      <div className={S.Divider}>또는</div>
      {/* onReady는 스크립트가 이미 로드된 상태로 재마운트될 때도 호출된다. */}
      <Script
        src={GIS_SCRIPT_SRC}
        strategy="afterInteractive"
        onReady={() => setIsScriptReady(true)}
      />
      <div ref={buttonSlotRef} className={S.ButtonSlot} />
      <p className={S.GuideText}>구글 계정으로 간편하게 로그인할 수 있어요.</p>
    </div>
  );
}
