import { mainClient } from '@/common/apis/ttockTtockClient';

export const postLogin = async (body: { email: string; password: string }) => {
  const data = await mainClient.post('/api/user/auth/login', body);

  return data;
};
