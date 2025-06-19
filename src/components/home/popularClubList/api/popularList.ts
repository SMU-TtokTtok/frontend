import { mainClient } from '@/common/apis/ttockTtockClient';
import { ClubItemInfo } from '@/common/model/club';

export const getPopularList = async () => {
  const data = await mainClient.get<ClubItemInfo[]>(`/posts/1`);

  return data;
};

export const patchFavorite = async (clubId: number) => {
  const data = await mainClient.patch(`/posts/${clubId}`, {});

  return data;
};
