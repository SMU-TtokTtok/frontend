import { mainClient } from '@/common/apis/ttockTtockClient';
import { API } from '@/common/constants/endpoints';
import { ClubItemInfo } from '@/common/model/club';
import { ClubsInfinite } from '@/common/model/clubInfinite';
type recruiting = 'all' | 'recruit' | 'notRecruit';
type sortType = 'ALL' | 'CENTRAL' | 'UNION' | 'DEPARTMENT';
type sort = 'latest' | 'popular' | 'member_count';
type category =
  | 'All'
  | 'ARTS'
  | 'ACADEMIC'
  | 'CULTURE'
  | 'SPORTS'
  | 'VOLUNTEER'
  | 'RELIGION'
  | 'ETC';
type grades = 'FIRST_GRADE' | 'SECOND_GRADE' | 'THIRD_GRADE' | 'FOURTH_GRADE';

type GetClubListParams = {
  category?: category;
  type?: sortType;
  grades?: grades[];
  recruiting?: recruiting;
  sort?: sort;
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
