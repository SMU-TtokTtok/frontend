import { mainClient } from '@/common/apis/ttockTtockClient';

/**
 * FCM 토큰을 백엔드에 전달
 */
export async function sendFCMTokenToBackend(token: string): Promise<void> {
  try {
    await mainClient.post('/api/users/fcm/token', {
      token: token,
      deviceType: 'WEB',
    });
  } catch (error) {
    console.error('FCM 토큰 전달 실패:', error);
    throw error;
  }
}

/**
 * FCM 토큰을 백엔드에서 삭제
 */
export async function deleteFCMTokenFromBackend(token: string): Promise<void> {
  try {
    await mainClient.delete('/api/users/fcm/token', {
      token: token,
    });
  } catch (error) {
    console.error('FCM 토큰 삭제 실패:', error);
    // 에러를 호출자에게 전달 (로컬 스토리지 정리는 호출자의 책임)
    throw error;
  }
}
