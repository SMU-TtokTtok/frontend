'use client';

import Script from 'next/script';
import { useEffect, useRef, useState } from 'react';

import { GA_EVENTS } from '@/common/constants/gaEvents';
import { trackGAEvent } from '@/lib/ga';
import * as S from './googleLogin.css';

const GIS_SCRIPT_SRC = 'https://accounts.google.com/gsi/client';

const MAX_BUTTON_WIDTH = 400;
const BUTTON_WIDTH_SAFETY_MARGIN = 8;

interface GoogleLoginButtonProps {
  onCredential: (idToken: string) => void;
}

export default function GoogleLoginButton({
  onCredential,
}: GoogleLoginButtonProps) {
  const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

  const buttonSlotRef = useRef<HTMLDivElement>(null);

  const [isScriptReady, setIsScriptReady] = useState(false);
  const [slotWidth, setSlotWidth] = useState(0);

  /**
   * 부모가 리렌더링되면서 onCredential 함수가 새로 만들어지더라도
   * Google GIS initialize를 다시 실행하지 않도록 ref로 관리한다.
   */
  const onCredentialRef = useRef(onCredential);

  useEffect(() => {
    onCredentialRef.current = onCredential;
  }, [onCredential]);

  /**
   * 버튼이 들어갈 영역의 실제 너비를 추적한다.
   *
   * 모바일 회전이나 반응형 레이아웃 변경 때문에
   * 컨테이너 너비가 바뀔 수 있다.
   */
  useEffect(() => {
    const buttonSlot = buttonSlotRef.current;

    if (!buttonSlot) {
      return;
    }

    const observer = new ResizeObserver(([entry]) => {
      const nextWidth = Math.floor(entry.contentRect.width);

      setSlotWidth((previousWidth) => {
        if (previousWidth === nextWidth) {
          return previousWidth;
        }

        return nextWidth;
      });
    });

    observer.observe(buttonSlot);

    return () => {
      observer.disconnect();
    };
  }, []);

  /**
   * GIS 초기화
   *
   * 여기서는 로그인 성공 결과만 처리한다.
   * popup 닫힘을 focus / visibilitychange 등으로 추측하지 않는다.
   */
  useEffect(() => {
    if (!isScriptReady || !clientId || !window.google) {
      return;
    }

    window.google.accounts.id.initialize({
      client_id: clientId,

      callback: ({ credential }) => {
        if (!credential) {
          return;
        }

        onCredentialRef.current(credential);
      },

      auto_select: false,
      use_fedcm_for_button: false,
    });
  }, [isScriptReady, clientId]);

  /**
   * Google 로그인 버튼 렌더링
   */
  useEffect(() => {
    const buttonSlot = buttonSlotRef.current;

    if (
      !isScriptReady ||
      !clientId ||
      !window.google ||
      !buttonSlot ||
      slotWidth <= 0
    ) {
      return;
    }

    const buttonWidth = Math.min(
      MAX_BUTTON_WIDTH,
      Math.max(
        0,
        slotWidth - BUTTON_WIDTH_SAFETY_MARGIN,
      ),
    );

    /**
     * ResizeObserver 때문에 effect가 다시 실행될 수 있으므로
     * 기존 GIS 버튼을 제거하고 현재 너비 기준으로 다시 렌더한다.
     */
    buttonSlot.replaceChildren();

    window.google.accounts.id.renderButton(buttonSlot, {
      type: 'standard',
      theme: 'outline',
      size: 'large',
      text: 'signin_with',
      shape: 'rectangular',
      logo_alignment: 'center',
      locale: 'ko',
      width: buttonWidth,
      click_listener: () => trackGAEvent(GA_EVENTS.GOOGLE_LOGIN_CLICK),
    });
  }, [isScriptReady, clientId, slotWidth]);

  if (!clientId) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        'NEXT_PUBLIC_GOOGLE_CLIENT_ID가 없어 구글 로그인 버튼을 숨깁니다.',
      );
    }

    return null;
  }

  return (
    <div className={S.Container}>
      <div className={S.Divider}>
        <span>또는</span>
      </div>

      <Script
        src={GIS_SCRIPT_SRC}
        strategy="afterInteractive"
        onReady={() => {
          setIsScriptReady(true);
        }}
      />

      <div ref={buttonSlotRef} className={S.ButtonSlot} />

      <p className={S.GuideText}>
        구글 계정으로 간편하게 로그인할 수 있어요.
      </p>
    </div>
  );
}
