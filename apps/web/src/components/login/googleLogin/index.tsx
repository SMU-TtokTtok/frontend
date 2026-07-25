'use client';

import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';
import * as S from './googleLogin.css';

const GIS_SCRIPT_SRC = 'https://accounts.google.com/gsi/client';

/** GIS 버튼은 픽셀 단위 width만 받는다(200~400px). */
const MIN_BUTTON_WIDTH = 200;
const MAX_BUTTON_WIDTH = 400;

interface GoogleLoginButtonProps {
  onCredential: (idToken: string) => void;
}

export default function GoogleLoginButton({ onCredential }: GoogleLoginButtonProps) {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
  const buttonSlotRef = useRef<HTMLDivElement>(null);
  const [isScriptReady, setIsScriptReady] = useState(false);

  // 부모 리렌더로 콜백이 새로 만들어져도 GIS를 다시 초기화하지 않도록 ref로 고정한다.
  const onCredentialRef = useRef(onCredential);
  useEffect(() => {
    onCredentialRef.current = onCredential;
  }, [onCredential]);

  useEffect(() => {
    const buttonSlot = buttonSlotRef.current;
    if (!isScriptReady || !clientId || !buttonSlot || !window.google) {
      return;
    }

    window.google.accounts.id.initialize({
      client_id: clientId,
      callback: ({ credential }) => onCredentialRef.current(credential),
    });

    window.google.accounts.id.renderButton(buttonSlot, {
      type: 'standard',
      theme: 'outline',
      size: 'large',
      text: 'signin_with',
      shape: 'rectangular',
      logo_alignment: 'center',
      locale: 'ko',
      width: Math.min(
        MAX_BUTTON_WIDTH,
        Math.max(MIN_BUTTON_WIDTH, buttonSlot.clientWidth || MIN_BUTTON_WIDTH),
      ),
    });
  }, [isScriptReady, clientId]);

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
