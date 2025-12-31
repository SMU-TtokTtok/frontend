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

  // 설치 상태 확인
  const checkIfInstalled = (): boolean => {
    return (
      window.matchMedia('(display-mode: standalone)').matches ||
      (window.navigator as any).standalone === true ||
      document.referrer.includes('android-app://')
    );
  };

  // Manifest 확인
  const checkManifest = (): boolean => {
    const manifestLink = document.querySelector('link[rel="manifest"]');
    return !!manifestLink;
  };

  // Service Worker 등록 상태 확인
  const checkServiceWorker = async (): Promise<boolean> => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.getRegistration();
        return !!registration;
      } catch (error) {
        return false;
      }
    } else {
      return false;
    }
  };

  // 설치 상태 확인 및 이벤트 리스너 등록
  useEffect(() => {
    // 설치 상태 확인 및 상태 업데이트
    setIsInstalled(checkIfInstalled());

    // beforeinstallprompt 이벤트 핸들러
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const promptEvent = e as BeforeInstallPromptEvent;
      setDeferredPrompt(promptEvent);
    };

    // appinstalled 이벤트 핸들러
    const handleAppInstalled = () => {
      setDeferredPrompt(null);
      setIsInstalled(true);
    };

    // 이벤트 리스너 등록
    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  // Service Worker 및 Manifest 체크
  useEffect(() => {
    // Manifest 확인 및 상태 업데이트
    setHasManifest(checkManifest());

    // Service Worker 확인 및 상태 업데이트
    checkServiceWorker().then((hasSW) => {
      setHasServiceWorker(hasSW);
    });
  }, []);

  const handleInstall = async () => {
    if (deferredPrompt) {
      // beforeinstallprompt 이벤트가 있는 경우 (모바일 또는 일부 데스크톱)
      try {
        // 저장된 이벤트의 prompt() 메서드를 호출하여 설치 프롬프트 표시
        await deferredPrompt.prompt();

        // 사용자의 선택 결과를 기다림
        await deferredPrompt.userChoice;

        // 이벤트는 한 번만 사용할 수 있으므로 null로 설정
        setDeferredPrompt(null);
      } catch (error) {
        setDeferredPrompt(null);
        showInstallInstructions();
      }
    } else {
      // beforeinstallprompt 이벤트가 없는 경우 (데스크톱 Chrome 등)
      showInstallInstructions();
    }
  };

  const showInstallInstructions = () => {
    const message = '브라우저 메뉴에서 "앱 설치" 또는 "홈 화면에 추가"를 선택해주세요.';
    alert(message);
  };

  // 설치 가능 여부:
  // 1. 아직 설치되지 않았고
  // 2. (beforeinstallprompt 이벤트가 있거나) Service Worker 또는 manifest가 있는 경우
  const installable = !isInstalled && (!!deferredPrompt || hasServiceWorker || hasManifest);

  return { installable, handleInstall };
};
