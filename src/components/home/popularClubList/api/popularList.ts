import { mainClient } from '@/common/apis/ttockTtockClient';
import { API } from '@/common/constants/endpoints';
import { Clubs } from '@/common/model/clubInfinite';

export const getPopularList = async () => {
  const data = await mainClient.get<Clubs>(`${API.USER.POPULAR_CLUBS}`);

  return data;
};

export const patchFavorite = async (clubId: string) => {
  const data = await mainClient.patch(`/favorite/${clubId}`, {});

  return data;
};
