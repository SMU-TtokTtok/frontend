import { mainClient } from '@/common/apis/ttockTtockClient';
import { ClubItemInfo } from '@/common/model/club';

export const getClubList = async (page: number) => {
  const data = await mainClient.get<ClubItemInfo[]>(`/posts/2`);

  return data;
};
