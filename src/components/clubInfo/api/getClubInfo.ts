import { mainClient } from '@/common/apis/ttockTtockClient';
import { ClubIntro } from '@/common/model/clubIntro';

export const getClubInfo = async (clubId: number) => {
  const data = await mainClient.get<ClubIntro>(`/api/club/${clubId}`);

  return data;
};
