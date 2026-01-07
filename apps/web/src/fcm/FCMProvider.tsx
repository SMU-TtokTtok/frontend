'use client';

import { useEffect } from 'react';
import * as Sentry from '@sentry/nextjs';
import { initializeAndSendFCMToken } from './fcmToken';
import { onForegroundMessage } from './firebase';

// 알림 아이콘 경로 상수
const NOTIFICATION_ICON = '/icons/favicon_192x192.png';
const NOTIFICATION_BADGE = '/icons/favicon_192x192.png';

// NotificationOptions를 확장한 타입 (비표준 속성 포함)
interface ExtendedNotificationOptions extends NotificationOptions {
  image?: string;
  vibrate?: number[];
}

/**
 * 포그라운드에서 알림 표시
 * Service Worker를 통해 알림을 표시하여 브라우저 알림으로 표시되도록 합니다.
 */
async function showForegroundNotification(
  title: string,
  options: NotificationOptions,
  onClick?: (notification: Notification) => void,
): Promise<boolean> {
  if (typeof window === 'undefined' || !('Notification' in window)) {
    console.error('❌ 이 브라우저는 알림을 지원하지 않습니다.');
    return false;
  }

  // 권한 확인 및 요청
  if (Notification.permission === 'default') {
    const permission = await Notification.requestPermission();
    if (permission !== 'granted') {
      return false;
    }
  }

  if (Notification.permission !== 'granted') {
    console.error('❌ 알림 권한이 거부되었습니다.');
    return false;
  }

  // Service Worker를 통해 알림 표시 (포그라운드에서도 브라우저 알림으로 표시됨)
  if ('serviceWorker' in navigator) {
    try {
      // 모든 Service Worker 등록 확인
      const registrations = await navigator.serviceWorker.getRegistrations();

      // firebase-messaging-sw.js를 등록한 Service Worker 찾기
      let targetRegistration: ServiceWorkerRegistration | null = null;

      for (const registration of registrations) {
        if (registration.scope && registration.active) {
          // firebase-messaging-sw.js가 등록된 Service Worker 찾기
          try {
            // scope가 루트인 것 우선 사용
            if (registration.scope === window.location.origin + '/') {
              targetRegistration = registration;
              break;
            }
          } catch (e) {
            console.warn('Service Worker 확인 중 오류:', e);
            Sentry.captureException(e);
          }
        }
      }

      // 찾지 못한 경우 첫 번째 등록 사용
      if (!targetRegistration && registrations.length > 0) {
        targetRegistration = registrations[0];
      }

      // Service Worker가 준비될 때까지 대기
      if (!targetRegistration) {
        targetRegistration = await navigator.serviceWorker.ready;
      }

      if (!targetRegistration) {
        return await showDirectNotification(title, options, onClick);
      }

      // Service Worker를 통해 알림 표시
      const notificationOptions: ExtendedNotificationOptions = {
        body: options.body || '',
        icon: options.icon || NOTIFICATION_ICON,
        badge: options.badge || NOTIFICATION_BADGE,
        tag: options.tag || 'fcm-notification',
        requireInteraction: options.requireInteraction || false,
        data: options.data || {},
      };

      // 표준이 아니지만 일부 브라우저에서 지원하는 옵션들
      const extendedOptions = options as ExtendedNotificationOptions;
      if (extendedOptions.image) {
        notificationOptions.image = extendedOptions.image;
      }
      if (extendedOptions.vibrate) {
        notificationOptions.vibrate = extendedOptions.vibrate;
      }
      if (options.silent !== undefined) {
        notificationOptions.silent = options.silent;
      }

      await targetRegistration.showNotification(title, notificationOptions);

      return true;
    } catch (error) {
      console.error('❌ Service Worker 알림 표시 실패, 일반 Notification 시도:', error);
      Sentry.captureException(error);
      return await showDirectNotification(title, options, onClick);
    }
  } else {
    // Service Worker가 없는 경우 일반 Notification 사용
    return await showDirectNotification(title, options, onClick);
  }
}

/**
 * 직접 Notification API를 사용하여 알림 표시 (폴백)
 */
async function showDirectNotification(
  title: string,
  options: NotificationOptions,
  onClick?: (notification: Notification) => void,
): Promise<boolean> {
  try {
    const notification = new Notification(title, {
      ...options,
      icon: options.icon || NOTIFICATION_ICON,
      badge: options.badge || NOTIFICATION_BADGE,
    });

    notification.onerror = (error) => {
      console.error('❌ 알림 오류:', error);
      Sentry.captureException(error);
    };

    // 알림 클릭 이벤트 처리
    if (onClick) {
      notification.onclick = (event) => {
        event.preventDefault();
        onClick(notification);
        notification.close();
      };
    }

    // 자동으로 닫히도록 (5초 후)
    setTimeout(() => {
      if (notification) {
        notification.close();
      }
    }, 5000);

    return true;
  } catch (error) {
    console.error('❌ 직접 알림 표시 실패:', error);
    Sentry.captureException(error);
    return false;
  }
}

/**
 * 알림 클릭 시 페이지 이동
 */
function handleNotificationClick(url?: string) {
  if (typeof window === 'undefined') {
    return;
  }

  const targetUrl = url || '/';

  // 현재 창이 열려있으면 포커스하고 이동
  if (window.focus) {
    window.focus();
  }

  // URL로 이동
  if (window.location.pathname !== targetUrl) {
    window.location.href = targetUrl;
  }
}

/**
 * FCM 초기화 및 관리 컴포넌트
 * 앱의 루트 레이아웃에 추가하여 사용합니다.
 */
export default function FCMProvider() {
  useEffect(() => {
    // 이미 로그인되어 있는 경우 FCM 토큰 초기화
    const accessToken = localStorage.getItem('user_access_token');
    if (accessToken) {
      // 로그인 상태인 경우 FCM 토큰 초기화
      initializeAndSendFCMToken().catch((error) => {
        console.error('❌ FCM 토큰 초기화 실패:', error);
        Sentry.captureException(error);
      });
    }

    // 포그라운드 메시지 수신 처리
    onForegroundMessage((payload) => {
      // 알림 표시
      if (payload.notification) {
        const title = payload.notification.title || '알림';
        const body = payload.notification.body || '';
        const image = payload.notification.image;
        const url = payload.data?.url || payload.fcmOptions?.link || '/';

        // 포그라운드 알림 표시
        const notificationOptions: ExtendedNotificationOptions = {
          body: body,
          icon: NOTIFICATION_ICON,
          badge: NOTIFICATION_BADGE,
          tag: payload.data?.tag || 'fcm-notification',
          requireInteraction: false,
          data: {
            ...payload.data,
            url: url,
          },
        };

        // image는 표준이 아니지만 일부 브라우저에서 지원
        if (image) {
          notificationOptions.image = image;
        }

        showForegroundNotification(title, notificationOptions, () => {
          // 알림 클릭 시 처리
          handleNotificationClick(url);
        }).catch((error) => {
          console.error('❌ 알림 표시 중 오류:', error);
          Sentry.captureException(error);
        });
      }
    });

    // 테스트용: 개발 환경에서만 전역 함수로 테스트 알림 추가
    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
      (window as any).testNotification = async () => {
        const success = await showForegroundNotification('테스트 알림', {
          body: '이것은 테스트 알림입니다. 알림이 보이나요?',
          icon: NOTIFICATION_ICON,
          badge: NOTIFICATION_BADGE,
        });

        if (!success) {
          const permission = await Notification.requestPermission();
          if (permission === 'granted') {
            // 권한이 부여되면 다시 시도
            await showForegroundNotification('테스트 알림', {
              body: '권한이 부여되었습니다! 알림이 보이나요?',
              icon: NOTIFICATION_ICON,
              badge: NOTIFICATION_BADGE,
            });
          }
        }
      };
    }
  }, []);

  return null;
}
