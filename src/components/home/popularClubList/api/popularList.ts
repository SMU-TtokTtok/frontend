import { mainClient } from '@/common/apis/ttockTtockClient';
import { ClubItemInfo } from '@/common/model/club';

export const getPopularList = async () => {
  const data = await mainClient.get<ClubItemInfo[]>(`/popular`);

  return data;
};

export const patchFavorite = async (clubId: number) => {
  const data = await mainClient.patch(`/favorite/${clubId}`, {});

  return data;
};
