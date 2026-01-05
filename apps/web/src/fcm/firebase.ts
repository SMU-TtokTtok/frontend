import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getMessaging, getToken, Messaging, onMessage } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyDudrRTphoKafmOI6RuxiuUIl9PuJeMAs8',
  authDomain: 'ttokttok-push.firebaseapp.com',
  projectId: 'ttokttok-push',
  storageBucket: 'ttokttok-push.firebasestorage.app',
  messagingSenderId: '97485420032',
  appId: '1:97485420032:web:20d9d96eca4c5bb0e0cae5',
  measurementId: 'G-5GXCG3NJM9',
};

// Firebase 앱 초기화 (이미 초기화된 경우 재초기화 방지)
let app: FirebaseApp;
if (getApps().length === 0) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// VAPID 키
const VAPID_KEY = process.env.NEXT_PUBLIC_VAPID_KEY;

// Messaging 인스턴스 (브라우저 환경에서만)
let messaging: Messaging | null = null;

if (typeof window !== 'undefined' && 'serviceWorker' in navigator) {
  try {
    messaging = getMessaging(app);
  } catch (error) {
    console.error('Firebase Messaging 초기화 실패:', error);
  }
}

/**
 * FCM Service Worker 등록
 */
async function registerServiceWorker(): Promise<ServiceWorkerRegistration | null> {
  if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
    return null;
  }

  try {
    // Firebase Messaging Service Worker 등록
    // next-pwa와 충돌을 피하기 위해 명시적으로 등록
    const registration = await navigator.serviceWorker.register('/firebase-messaging-sw.js', {
      scope: '/',
    });
    console.log('FCM Service Worker 등록 성공:', registration.scope);
    return registration;
  } catch (error) {
    console.error('FCM Service Worker 등록 실패:', error);
    // 등록 실패 시 기본 Service Worker 사용
    try {
      return await navigator.serviceWorker.ready;
    } catch {
      return null;
    }
  }
}

/**
 * FCM 토큰 요청 및 반환
 */
export async function requestFCMToken(): Promise<string | null> {
  if (!messaging) {
    console.error('Messaging이 초기화되지 않았습니다.');
    return null;
  }

  try {
    // FCM Service Worker 등록
    const registration = await registerServiceWorker();
    if (!registration) {
      console.error('Service Worker를 등록할 수 없습니다.');
      return null;
    }

    // FCM 토큰 요청
    const token = await getToken(messaging, {
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration: registration,
    });

    if (token) {
      console.log('FCM 토큰:', token);
      return token;
    } else {
      console.log('FCM 토큰을 받을 수 없습니다. 알림 권한이 필요합니다.');
      return null;
    }
  } catch (error) {
    console.error('FCM 토큰 요청 실패:', error);
    return null;
  }
}

/**
 * 포그라운드에서 메시지 수신 처리
 */
export function onForegroundMessage(callback: (payload: any) => void) {
  if (!messaging) {
    console.error('Messaging이 초기화되지 않았습니다.');
    return;
  }

  onMessage(messaging, (payload) => {
    console.log('포그라운드 메시지 수신:', payload);
    callback(payload);
  });
}

export { app, messaging };
