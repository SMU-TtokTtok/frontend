'use client';

import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';
import * as S from './googleLogin.css';

const GIS_SCRIPT_SRC = 'https://accounts.google.com/gsi/client';

/**
 * GIS의 width는 "최소" 너비이고 상한이 400px이다.
 * 슬롯보다 큰 값을 넘기면 그만큼 넘쳐 나오므로 항상 슬롯 너비 이하로 요청한다.
 */
const MAX_BUTTON_WIDTH = 400;

interface GoogleLoginButtonProps {
  onCredential: (idToken: string) => void;
}

export default function GoogleLoginButton({ onCredential }: GoogleLoginButtonProps) {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const buttonSlotRef = useRef<HTMLDivElement>(null);
  const [isScriptReady, setIsScriptReady] = useState(false);
  const [renderVersion, setRenderVersion] = useState(0);

  // 부모 리렌더로 콜백이 새로 만들어져도 GIS를 다시 초기화하지 않도록 ref로 고정한다.
  const onCredentialRef = useRef(onCredential);
  useEffect(() => {
    onCredentialRef.current = onCredential;
  }, [onCredential]);

  // 사용자가 구글 인증 창에서 취소/닫기를 누르면 GIS 버튼 iframe이 포커스를 잡은 채
  // 다시 클릭되지 않는 경우가 있어, 페이지가 돌아왔을 때 버튼을 새로 그린다.
  useEffect(() => {
    let resetTimer: number | undefined;

    const resetButton = () => {
      if (document.visibilityState !== 'visible') return;

      if (resetTimer) {
        window.clearTimeout(resetTimer);
      }

      resetTimer = window.setTimeout(() => {
        setRenderVersion((version) => version + 1);
      }, 100);
    };

    window.addEventListener('focus', resetButton);
    document.addEventListener('visibilitychange', resetButton);

    return () => {
      if (resetTimer) {
        window.clearTimeout(resetTimer);
      }

      window.removeEventListener('focus', resetButton);
      document.removeEventListener('visibilitychange', resetButton);
    };
  }, []);

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
      callback: ({ credential }) => onCredentialRef.current(credential),
      auto_select: false,
      use_fedcm_for_button: false,
    });
  }, [isScriptReady, clientId]);

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
      width: Math.min(MAX_BUTTON_WIDTH, slotWidth),
    });
  }, [isScriptReady, clientId, slotWidth, renderVersion]);

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
