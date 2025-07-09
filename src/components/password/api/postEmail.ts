import { mainClient } from '@/common/apis/ttockTtockClient';

export const postEmail = async (body: { email: string }) => {
  // const data = await mainClient.get<UserClubIntro>(`/api/club/${clubId}`);
  const data = await mainClient.post('/api/user/auth/send-reset-code', body);

  return data;
};
