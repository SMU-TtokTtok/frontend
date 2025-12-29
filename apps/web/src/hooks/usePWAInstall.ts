import { useEffect, useState } from 'react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export const usePWAInstall = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [hasServiceWorker, setHasServiceWorker] = useState(false);
  const [hasManifest, setHasManifest] = useState(false);

  useEffect(() => {
    // 이미 설치되어 있는지 확인
    const checkIfInstalled = () => {
      const isStandalone =
        window.matchMedia('(display-mode: standalone)').matches ||
        (window.navigator as any).standalone === true ||
        document.referrer.includes('android-app://');
      setIsInstalled(isStandalone);
    };

    checkIfInstalled();

    // Service Worker 등록 상태 확인
    const checkServiceWorker = async () => {
      if ('serviceWorker' in navigator) {
        try {
          const registration = await navigator.serviceWorker.getRegistration();
          const hasSW = !!registration;
          // console.log('🔍 Service Worker 체크:', hasSW ? '✅ 등록됨' : '❌ 등록 안됨');
          if (registration) {
            // console.log('   - Scope:', registration.scope);
          }
          setHasServiceWorker(hasSW);
        } catch (error) {
          // console.log('❌ Service Worker 체크 오류:', error);
          setHasServiceWorker(false);
        }
      } else {
        // console.log('❌ Service Worker를 지원하지 않는 브라우저');
      }
    };

    // manifest.json 확인
    const checkManifest = () => {
      const manifestLink = document.querySelector('link[rel="manifest"]');
      const hasMan = !!manifestLink;
      // console.log('🔍 Manifest 체크:', hasMan ? '✅ 있음' : '❌ 없음');
      if (manifestLink) {
        // console.log('   - href:', manifestLink.getAttribute('href'));
      }
      setHasManifest(hasMan);
    };

    // 약간의 지연 후 체크 (DOM이 완전히 로드된 후)
    const timer = setTimeout(() => {
      checkServiceWorker();
      checkManifest();
    }, 100);

    // beforeinstallprompt 이벤트 핸들러
    const handleBeforeInstallPrompt = (e: Event) => {
      console.log('✅ beforeinstallprompt 이벤트 발생!');
      // 기본 동작(브라우저 자동 설치 프롬프트)을 막고 이벤트를 저장
      e.preventDefault();
      const promptEvent = e as BeforeInstallPromptEvent;
      setDeferredPrompt(promptEvent);
    };

    // 이벤트 리스너 등록
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // appinstalled 이벤트 리스너 (설치 완료 시)
    const handleAppInstalled = () => {
      console.log('✅ PWA가 설치되었습니다!');
      setDeferredPrompt(null);
      setIsInstalled(true);
    };

    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      // beforeinstallprompt 이벤트가 있는 경우 (모바일 또는 일부 데스크톱)
      try {
        // 저장된 이벤트의 prompt() 메서드를 호출하여 설치 프롬프트 표시
        await deferredPrompt.prompt();

        // 사용자의 선택 결과를 기다림
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
          console.log('✅ 사용자가 PWA 설치를 수락했습니다');
        } else {
          console.log('❌ 사용자가 PWA 설치를 거부했습니다');
        }

        // 이벤트는 한 번만 사용할 수 있으므로 null로 설정
        setDeferredPrompt(null);
      } catch (error) {
        console.error('❌ PWA 설치 프롬프트 오류:', error);
        setDeferredPrompt(null);
        showInstallInstructions();
      }
    } else {
      // beforeinstallprompt 이벤트가 없는 경우 (데스크톱 Chrome 등)
      showInstallInstructions();
    }
  };

  const showInstallInstructions = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    let message = '';

    if (/chrome/.test(userAgent) && !/edg/.test(userAgent)) {
      message =
        '주소창 오른쪽의 설치 아이콘(➕)을 클릭하거나,\n메뉴(⋮) > "앱 설치" 또는 "홈 화면에 추가"를 선택해주세요.';
    } else if (/edg/.test(userAgent)) {
      message =
        '주소창 오른쪽의 앱 아이콘을 클릭하거나,\n메뉴(⋯) > "앱" > "이 사이트를 앱으로 설치"를 선택해주세요.';
    } else {
      message = '브라우저 메뉴에서 "앱 설치" 또는 "홈 화면에 추가"를 선택해주세요.';
    }

    alert(message);
  };

  // 설치 가능 여부:
  // 1. 아직 설치되지 않았고
  // 2. (beforeinstallprompt 이벤트가 있거나) Service Worker 또는 manifest가 있는 경우
  const installable = !isInstalled && (!!deferredPrompt || hasServiceWorker || hasManifest);

  // 디버깅 로그
  useEffect(() => {
    console.log('🔍 PWA 설치 가능 여부 체크:', {
      isInstalled,
      deferredPrompt: !!deferredPrompt,
      hasServiceWorker,
      hasManifest,
      installable,
    });
  }, [isInstalled, deferredPrompt, hasServiceWorker, hasManifest, installable]);

  return { installable, handleInstall };
};
