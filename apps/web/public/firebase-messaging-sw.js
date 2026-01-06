// FCM Service Worker
// 이 파일은 public 폴더에 위치해야 합니다

importScripts('https://www.gstatic.com/firebasejs/11.1.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.1.0/firebase-messaging-compat.js');

const firebaseConfig = {
  apiKey: 'AIzaSyDudrRTphoKafmOI6RuxiuUIl9PuJeMAs8',
  authDomain: 'ttokttok-push.firebaseapp.com',
  projectId: 'ttokttok-push',
  storageBucket: 'ttokttok-push.firebasestorage.app',
  messagingSenderId: '97485420032',
  appId: '1:97485420032:web:20d9d96eca4c5bb0e0cae5',
  measurementId: 'G-5GXCG3NJM9',
};

// Firebase 초기화
firebase.initializeApp(firebaseConfig);

// Messaging 인스턴스 가져오기
const messaging = firebase.messaging();

// 백그라운드 메시지 수신 처리
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification?.title || '알림';
  const notificationBody = payload.notification?.body || '';
  const notificationImage = payload.notification?.image;

  // 알림 클릭 시 이동할 URL (data에서 가져오거나 기본값)
  const urlToOpen = payload.data?.url || payload.fcmOptions?.link || '/';

  const notificationOptions = {
    body: notificationBody,
    icon: '/icons/favicon_192x192.png',
    badge: '/icons/favicon_192x192.png',
    image: notificationImage,
    tag: payload.data?.tag || 'fcm-notification',
    requireInteraction: false,
    // 알림 클릭 시 전달할 데이터
    data: {
      ...payload.data,
      url: urlToOpen,
    },
  };

  return self.registration
    .showNotification(notificationTitle, notificationOptions)
    .catch((error) => {
      console.error('[firebase-messaging-sw.js] ❌ 알림 표시 실패:', error);
    });
});

// 알림 클릭 처리
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  // 알림 클릭 시 열릴 URL (notification data에서 가져오거나 기본값)
  const urlToOpen = event.notification.data?.url || '/';

  event.waitUntil(
    clients
      .matchAll({
        type: 'window',
        includeUncontrolled: true,
      })
      .then((clientList) => {
        // 현재 도메인과 일치하는 클라이언트 찾기
        const url = new URL(urlToOpen, self.location.origin).href;

        // 이미 열려있는 탭이 있으면 포커스하고 해당 페이지로 이동
        for (let i = 0; i < clientList.length; i++) {
          const client = clientList[i];

          if ('focus' in client && 'navigate' in client) {
            client.focus();
            // 같은 도메인이면 navigate로 이동
            if (client.url.startsWith(self.location.origin)) {
              return client.navigate(url);
            }
          }
        }

        // 새 창/탭 열기
        if (clients.openWindow) {
          return clients.openWindow(url);
        }
      })
      .catch((error) => {
        console.error('[firebase-messaging-sw.js] ❌ 알림 클릭 처리 오류:', error);
      }),
  );
});
