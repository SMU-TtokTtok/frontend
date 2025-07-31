import { mainClient } from '@/common/apis/ttockTtockClient';
import { API } from '@/common/constants/endpoints';
import { ClubItemInfo } from '@/common/model/club';
import { ClubsInfinite } from '@/common/model/clubInfinite';
type GetClubListParams = {
  category?: string;
  type?: string;
  grades?: string[];
  recruiting?: boolean;
  sort?: string;
  size?: number;
  cursor?: string;
};

export const getClubList = async (params: GetClubListParams) => {
  /*const data = await mainClient.get<ClubsInfinite>(
    `${API.USER.CLUBS}?category=${params.category}&type=${params.type}&grades=${params.grades}&recruiting=${params.recruiting}&sort=${params.sort}&size=${params.size}&cursor=${params.cursor}`,
  );*/
  const data = await mainClient.get<ClubItemInfo[]>(`${API.USER.CLUBS}`);
  return data;
};
