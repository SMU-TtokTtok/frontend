import { mainClient } from '@/common/apis/ttockTtockClient';

export const postImage = async (body: any, clubId: string) => {
  const data = await mainClient.post(`/api/user/applies/${clubId}`, body);

  return data;
};
