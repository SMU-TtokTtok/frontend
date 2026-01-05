'use client';

import { useEffect } from 'react';
import { initializeAndSendFCMToken } from './fcmToken';
import { onForegroundMessage } from './firebase';

/**
 * 포그라운드에서 알림 표시
 * Service Worker를 통해 알림을 표시하여 브라우저 알림으로 표시되도록 합니다.
 */
async function showForegroundNotification(
  title: string,
  options: NotificationOptions,
  onClick?: (notification: Notification) => void,
): Promise<boolean> {
  console.log('🔔 showForegroundNotification 호출:', {
    title,
    permission: Notification.permission,
  });

  if (typeof window === 'undefined' || !('Notification' in window)) {
    console.error('❌ 이 브라우저는 알림을 지원하지 않습니다.');
    return false;
  }

  // 권한 확인 및 요청
  if (Notification.permission === 'default') {
    console.warn('⚠️ 알림 권한이 아직 요청되지 않았습니다. 권한을 요청합니다...');
    const permission = await Notification.requestPermission();
    console.log('📋 알림 권한 요청 결과:', permission);
    if (permission !== 'granted') {
      return false;
    }
  }

  if (Notification.permission !== 'granted') {
    console.error('❌ 알림 권한이 거부되었습니다. 현재 상태:', Notification.permission);
    console.log('💡 macOS에서 알림 권한 설정:');
    console.log('   1. 시스템 설정 > 알림');
    console.log('   2. Safari 또는 Chrome 앱 찾기');
    console.log('   3. 알림 허용 확인');
    return false;
  }

  // Service Worker를 통해 알림 표시 (포그라운드에서도 브라우저 알림으로 표시됨)
  if ('serviceWorker' in navigator) {
    try {
      console.log('🔧 Service Worker를 통한 알림 표시 시도...');

      // 모든 Service Worker 등록 확인
      const registrations = await navigator.serviceWorker.getRegistrations();
      console.log('📋 등록된 Service Worker 개수:', registrations.length);

      // firebase-messaging-sw.js를 등록한 Service Worker 찾기
      let targetRegistration: ServiceWorkerRegistration | null = null;

      for (const registration of registrations) {
        if (registration.scope && registration.active) {
          // firebase-messaging-sw.js가 등록된 Service Worker 찾기
          try {
            const sw = registration.active;
            // scope가 루트인 것 우선 사용
            if (registration.scope === window.location.origin + '/') {
              targetRegistration = registration;
              console.log('✅ firebase-messaging-sw Service Worker 찾음:', registration.scope);
              break;
            }
          } catch (e) {
            console.warn('Service Worker 확인 중 오류:', e);
          }
        }
      }

      // 찾지 못한 경우 첫 번째 등록 사용
      if (!targetRegistration && registrations.length > 0) {
        targetRegistration = registrations[0];
        console.log('⚠️ 기본 Service Worker 사용:', targetRegistration.scope);
      }

      // Service Worker가 준비될 때까지 대기
      if (!targetRegistration) {
        console.log('⏳ Service Worker 준비 대기 중...');
        targetRegistration = await navigator.serviceWorker.ready;
      }

      if (!targetRegistration) {
        console.warn('⚠️ Service Worker가 준비되지 않았습니다. 일반 Notification 사용');
        return await showDirectNotification(title, options, onClick);
      }

      console.log('📤 Service Worker를 통해 알림 전송:', {
        title,
        body: options.body,
        scope: targetRegistration.scope,
      });

      // Service Worker를 통해 알림 표시
      const notificationOptions: any = {
        body: options.body || '',
        icon: options.icon || '/icons/favicon_192x192.png',
        badge: options.badge || '/icons/favicon_192x192.png',
        tag: options.tag || 'fcm-notification',
        requireInteraction: options.requireInteraction || false,
        data: options.data || {},
      };

      // 표준이 아니지만 일부 브라우저에서 지원하는 옵션들
      if ((options as any).image) {
        notificationOptions.image = (options as any).image;
      }
      if ((options as any).vibrate) {
        notificationOptions.vibrate = (options as any).vibrate;
      }
      if (options.silent !== undefined) {
        notificationOptions.silent = options.silent;
      }

      await targetRegistration.showNotification(title, notificationOptions);

      console.log('✅ Service Worker를 통한 알림 표시 성공');
      return true;
    } catch (error) {
      console.error('❌ Service Worker 알림 표시 실패, 일반 Notification 시도:', error);
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
    console.log('✅ 직접 Notification 생성 시도...');
    const notification = new Notification(title, {
      ...options,
      icon: options.icon || '/icons/favicon_192x192.png',
      badge: options.badge || '/icons/favicon_192x192.png',
    });

    console.log('✅ 알림 객체 생성 성공');

    // 알림 표시 이벤트
    notification.onshow = () => {
      console.log('👁️ 알림이 표시되었습니다');
    };

    notification.onerror = (error) => {
      console.error('❌ 알림 오류:', error);
    };

    notification.onclose = () => {
      console.log('🔒 알림이 닫혔습니다');
    };

    // 알림 클릭 이벤트 처리
    if (onClick) {
      notification.onclick = (event) => {
        console.log('👆 알림 클릭 이벤트 발생');
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
    console.log('🔔 FCMProvider 초기화 시작');

    // 알림 권한 상태 확인 및 디버깅
    if (typeof window !== 'undefined') {
      console.log('📱 브라우저 환경 확인:', {
        hasNotification: 'Notification' in window,
        hasServiceWorker: 'serviceWorker' in navigator,
        notificationPermission: Notification.permission,
        userAgent: navigator.userAgent,
        isPWA: window.matchMedia('(display-mode: standalone)').matches,
      });

      // Service Worker 등록 상태 확인
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          console.log('🔧 등록된 Service Worker:', registrations.length);
          registrations.forEach((reg, index) => {
            console.log(`  Service Worker ${index + 1}:`, {
              scope: reg.scope,
              active: reg.active?.state,
              waiting: reg.waiting?.state,
              installing: reg.installing?.state,
            });
          });
        });
      }
    }

    // 이미 로그인되어 있는 경우 FCM 토큰 초기화
    const accessToken = localStorage.getItem('user_access_token');
    if (accessToken) {
      console.log('🔐 로그인 상태 확인됨, FCM 토큰 초기화 시작');
      // 로그인 상태인 경우 FCM 토큰 초기화
      initializeAndSendFCMToken()
        .then((token) => {
          if (token) {
            console.log('✅ FCM 토큰 초기화 성공:', token.substring(0, 20) + '...');
          } else {
            console.warn('⚠️ FCM 토큰 초기화 실패: 토큰을 받을 수 없음');
          }
        })
        .catch((error) => {
          console.error('❌ FCM 토큰 초기화 실패:', error);
        });
    } else {
      console.log('🔓 로그인 상태 아님, FCM 토큰 초기화 건너뜀');
    }

    // 포그라운드 메시지 수신 처리
    console.log('📨 포그라운드 메시지 리스너 등록 중...');
    onForegroundMessage((payload) => {
      console.log('📩 포그라운드 메시지 수신:', payload);

      // 알림 표시
      if (payload.notification) {
        const title = payload.notification.title || '알림';
        const body = payload.notification.body || '';
        const image = payload.notification.image;
        const url = payload.data?.url || payload.fcmOptions?.link || '/';

        console.log('🔔 알림 표시 시도:', { title, body, url });

        // 포그라운드 알림 표시
        const notificationOptions: NotificationOptions & { image?: string } = {
          body: body,
          icon: '/icons/favicon_192x192.png',
          badge: '/icons/favicon_192x192.png',
          tag: payload.data?.tag || 'fcm-notification',
          requireInteraction: false,
          data: {
            ...payload.data,
            url: url,
          },
        };

        // image는 표준이 아니지만 일부 브라우저에서 지원
        if (image) {
          (notificationOptions as any).image = image;
        }

        showForegroundNotification(title, notificationOptions, () => {
          // 알림 클릭 시 처리
          console.log('👆 알림 클릭됨, 페이지 이동:', url);
          handleNotificationClick(url);
        })
          .then((success) => {
            if (success) {
              console.log('✅ 알림 표시 성공');
            } else {
              console.warn('⚠️ 알림 표시 실패');
            }
          })
          .catch((error) => {
            console.error('❌ 알림 표시 중 오류:', error);
          });
      } else {
        console.warn('⚠️ payload에 notification이 없음:', payload);
      }
    });

    // 테스트용: 개발 환경에서만 전역 함수로 테스트 알림 추가
    if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
      (window as any).testNotification = async () => {
        console.log('🧪 테스트 알림 시작');
        const success = await showForegroundNotification(
          '테스트 알림',
          {
            body: '이것은 테스트 알림입니다. 알림이 보이나요?',
            icon: '/icons/favicon_192x192.png',
            badge: '/icons/favicon_192x192.png',
          },
          () => {
            console.log('테스트 알림 클릭됨');
          },
        );

        if (!success) {
          console.warn('⚠️ 알림 권한이 없습니다. 권한을 요청합니다...');
          const permission = await Notification.requestPermission();
          console.log('📋 알림 권한 결과:', permission);
          if (permission === 'granted') {
            // 권한이 부여되면 다시 시도
            await showForegroundNotification(
              '테스트 알림',
              {
                body: '권한이 부여되었습니다! 알림이 보이나요?',
                icon: '/icons/favicon_192x192.png',
                badge: '/icons/favicon_192x192.png',
              },
              () => {
                console.log('테스트 알림 클릭됨');
              },
            );
          }
        }
      };
      console.log(
        '🧪 개발 모드: 브라우저 콘솔에서 testNotification() 함수를 호출하여 알림을 테스트할 수 있습니다.',
      );
    }
  }, []);

  return null;
}
