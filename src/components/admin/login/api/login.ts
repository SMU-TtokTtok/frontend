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
  const data = await adminClient.post(`${API.ADMIN.RE_ISSUE}`, {});

  return data;
};
