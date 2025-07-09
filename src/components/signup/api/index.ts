import { mainClient } from '@/common/apis/ttockTtockClient';

export const postEmail = async (body: { email: string }) => {
  const data = await mainClient.post('/api/user/auth/send-verification', body);

  return data;
};
