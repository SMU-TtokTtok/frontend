import { mainClient } from '@/common/apis/ttockTtockClient';
import { UserClubIntro } from '@/common/model/clubIntro';

export const getClubInfo = async (clubId: string) => {
  const data = await mainClient.get<UserClubIntro>(`/api/clubs/${clubId}/content`);

  return data;
};
