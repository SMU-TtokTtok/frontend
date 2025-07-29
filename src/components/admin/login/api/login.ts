import { adminClient } from '@/common/apis/ttockTtockClient';

export const postLogin = async ({ login, password }: { login: string; password: string }) => {
  const data = await adminClient.post(`/auth/login`, { username: login, password: password });

  return data;
};

export const postAdminRefresh = async () => {
  const data = await adminClient.post(`/auth/re-issue`, {});

  return data;
};
