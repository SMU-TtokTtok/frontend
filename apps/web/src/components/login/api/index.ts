import { mainClient } from '@/common/apis/ttockTtockClient';

export const postLogin = async (body: { email: string; password: string }) => {
  try {
    const data = await mainClient.post('/api/user/auth/login', body);

    localStorage.setItem('name', data.data.user.name);
    localStorage.setItem('user_access_token', data.data.accessToken);
    localStorage.setItem('user_refresh_token', data.data.refreshToken);

    return data;
  } catch (error) {
    console.error('로그인 요청 실패:', error);
    throw new Error('로그인에 실패했습니다. 학번과 비밀번호를 확인해주세요.');
  }
};

export const postLogout = async () => {
  try {
    const data = await mainClient.post(`/api/user/auth/logout`, null);

    return data;
  } catch (error) {
    console.error('로그아웃 요청 실패:', error);
    throw error;
  }
};

export const postRefresh = async () => {
  try {
    const refreshToken = localStorage.getItem('user_refresh_token');
    if (!refreshToken) {
      throw new Error('리프레시 토큰이 존재하지 않습니다.');
    }

    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/user/auth/re-issue`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${refreshToken}`,
      },
    });

    const data = await response.json();
    localStorage.setItem('user_access_token', data.data.accessToken);
    return data;
  } catch (error) {
    console.error('토큰 재발급 실패:', error);
    throw new Error('세션이 만료되었습니다. 다시 로그인해주세요.');
  }
};
