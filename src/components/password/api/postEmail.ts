import { mainClient } from '@/common/apis/ttockTtockClient';

export const postEmail = async (body: { email: string }) => {
  const data = await mainClient.post('/api/user/auth/send-reset-code', body);

  return data;
};

export const postCode = async (body: { email: string; code: string }) => {
  const data = await mainClient.post('/api/user/auth/verify-email', body);

  return data;
};
