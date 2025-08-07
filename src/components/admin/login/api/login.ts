import { adminClient } from '@/common/apis/ttockTtockClient';
import { API } from '@/common/constants/endpoints';

export const postLogin = async ({ login, password }: { login: string; password: string }) => {
  const data = await adminClient.post(`${API.ADMIN.LOGIN}`, {
    username: login,
    password: password,
  });

  return data;
};

export const postAdminRefresh = async () => {
  const refreshToken = localStorage.getItem('admin_refresh_token');
  if (!refreshToken) {
    throw new Error('리프레시 토큰이 존재하지 않습니다.');
  }

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}${API.ADMIN.RE_ISSUE}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${refreshToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('토큰 재발급 실패');
  }

  const data = await response.json();

  localStorage.setItem('admin_access_token', data.accessToken);

  return data.accessToken;
};
