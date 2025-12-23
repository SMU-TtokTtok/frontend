import { mainClient } from '@/common/apis/ttockTtockClient';

export const postFormInfo = async (body: FormData, clubId: string) => {
  // console.log(body);

  const data = await mainClient.post(`/api/user/applies/${clubId}`, body);
  return data;
};
