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

    if (recoveryTimerRef.current) {
      window.clearTimeout(recoveryTimerRef.current);
    }

    const isMobileLike =
      window.matchMedia(`(max-width: 1023px)`).matches || window.navigator.maxTouchPoints > 0;

    if (!isMobileLike) return;

    // PWA standalone(iOS)에서는 구글 인증 시트를 닫아도 visibilitychange/focus가
    // 안정적으로 발생하지 않아 위 리스너가 못 잡는 경우가 있어, 조건 없이 재렌더한다.
    // 팝업은 별도 브라우징 컨텍스트라 부모 버튼을 다시 그려도 진행 중인 인증엔 영향 없다.
    recoveryTimerRef.current = window.setTimeout(() => {
      queueButtonRender(0);
    }, 2500);
  }, [queueButtonRender]);

  // 사용자가 구글 인증 화면에서 취소/닫기를 누르면 GIS 버튼 iframe이 멈춘 상태로
  // 남는 경우가 있어, 페이지가 다시 보일 때 버튼을 새로 그린다.
  useEffect(() => {
    const resetButton = () => {
      if (document.visibilityState !== 'visible') return;

      if (authAttemptStartedRef.current) {
        clearRecoveryTimer();
      }

      authAttemptStartedRef.current = false;
      queueButtonRender();
    };

    window.addEventListener('focus', resetButton);
    window.addEventListener('pageshow', resetButton);
    document.addEventListener('visibilitychange', resetButton);

    return () => {
      if (resetTimerRef.current) {
        window.clearTimeout(resetTimerRef.current);
      }

      if (recoveryTimerRef.current) {
        window.clearTimeout(recoveryTimerRef.current);
      }

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
        clearRecoveryTimer();
        onCredentialRef.current(credential);
      },
      auto_select: false,
      use_fedcm_for_button: false,
    });
  }, [isScriptReady, clientId, clearRecoveryTimer]);

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
