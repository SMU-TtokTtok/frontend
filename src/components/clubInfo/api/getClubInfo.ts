import { mainClient } from '@/common/apis/ttockTtockClient';
import { UserClubIntro } from '@/common/model/clubIntro';

export const getClubInfo = async (clubId: number) => {
  const data = await mainClient.get<UserClubIntro>(`/api/club/${clubId}`);

  return data;
};
