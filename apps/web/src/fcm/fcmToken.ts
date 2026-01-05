import { requestFCMToken } from './firebase';
import { mainClient } from '@/common/apis/ttockTtockClient';

const FCM_TOKEN_STORAGE_KEY = 'fcm_token';

/**
 * FCM 토큰을 백엔드에 전달
 */
export async function sendFCMTokenToBackend(token: string): Promise<void> {
  try {
    await mainClient.post('/api/users/fcm/token', {
      token: token,
      deviceType: 'WEB',
    });
    console.log('FCM 토큰이 백엔드에 성공적으로 전달되었습니다.');
  } catch (error) {
    console.error('FCM 토큰 전달 실패:', error);
    throw error;
  }
}

/**
 * FCM 토큰 초기화 및 백엔드 전달
 */
export async function initializeAndSendFCMToken(): Promise<string | null> {
  try {
    // 알림 권한 확인
    if (typeof window === 'undefined' || !('Notification' in window)) {
      console.log('이 브라우저는 알림을 지원하지 않습니다.');
      return null;
    }

    let permission = Notification.permission;

    // 권한이 없는 경우 요청
    if (permission === 'default') {
      permission = await Notification.requestPermission();
    }

    if (permission !== 'granted') {
      console.log('알림 권한이 거부되었습니다.');
      return null;
    }

    // Service Worker 등록 확인
    if (!('serviceWorker' in navigator)) {
      console.log('이 브라우저는 Service Worker를 지원하지 않습니다.');
      return null;
    }

    // FCM 토큰 요청
    const token = await requestFCMToken();

    if (!token) {
      console.log('FCM 토큰을 받을 수 없습니다.');
      return null;
    }

    // 로컬 스토리지에 저장된 토큰과 비교
    const storedToken = localStorage.getItem(FCM_TOKEN_STORAGE_KEY);
    if (storedToken === token) {
      console.log('FCM 토큰이 변경되지 않았습니다.');
      return token;
    }

    // 백엔드에 전달
    try {
      await sendFCMTokenToBackend(token);
      localStorage.setItem(FCM_TOKEN_STORAGE_KEY, token);
      console.log('FCM 토큰이 성공적으로 초기화되고 전달되었습니다.');
    } catch (error) {
      console.error('FCM 토큰 전달 실패 (토큰은 받았지만 서버 전달 실패):', error);
      // 토큰은 받았으므로 반환
    }

    return token;
  } catch (error) {
    console.error('FCM 토큰 초기화 실패:', error);
    return null;
  }
}

/**
 * 저장된 FCM 토큰 가져오기
 */
export function getStoredFCMToken(): string | null {
  if (typeof window === 'undefined') {
    return null;
  }
  return localStorage.getItem(FCM_TOKEN_STORAGE_KEY);
}

/**
 * FCM 토큰을 백엔드에서 삭제
 */
export async function deleteFCMTokenFromBackend(token: string): Promise<void> {
  try {
    await mainClient.delete('/api/users/fcm/token', {
      token: token,
    });
    console.log('FCM 토큰이 백엔드에서 성공적으로 삭제되었습니다.');
  } catch (error) {
    console.error('FCM 토큰 삭제 실패:', error);
    // 삭제 실패해도 로컬 스토리지는 정리
    throw error;
  }
}

/**
 * FCM 토큰 삭제 (로그아웃 시 사용)
 * 백엔드에서 토큰 삭제 후 로컬 스토리지도 정리
 */
export async function clearFCMToken(): Promise<void> {
  if (typeof window === 'undefined') {
    return;
  }

  const storedToken = localStorage.getItem(FCM_TOKEN_STORAGE_KEY);
  if (storedToken) {
    try {
      // 백엔드에서 토큰 삭제
      await deleteFCMTokenFromBackend(storedToken);
    } catch (error) {
      console.error('백엔드 토큰 삭제 실패 (로컬 스토리지는 정리합니다):', error);
    }
  }

  // 로컬 스토리지에서 토큰 삭제
  localStorage.removeItem(FCM_TOKEN_STORAGE_KEY);
}
