import { mainClient } from '@/common/apis/ttockTtockClient';
import { API } from '@/common/constants/endpoints';
import { Clubs } from '@/common/model/clubInfinite';
export type recruiting = 'null' | 'true' | 'false';
export type sortType = 'null' | 'CENTRAL' | 'UNION' | 'DEPARTMENT';
export type sort = 'latest' | 'popular' | 'member_count';
export type category =
  | 'null'
  | 'ARTS'
  | 'ACADEMIC'
  | 'CULTURE'
  | 'SPORTS'
  | 'VOLUNTEER'
  | 'RELIGION'
  | 'ETC';
export type grades = 'FIRST_GRADE' | 'SECOND_GRADE' | 'THIRD_GRADE' | 'FOURTH_GRADE';
export type clubUniv = 'GLOBAL_AREA' | 'DESIGN' | 'ENGINEERING' | 'CONVERGENCE_TECHNOLOGY' | 'ARTS';
export type GetClubListParams = {
  category?: category;
  type?: sortType;
  grades?: grades[];
  recruiting?: recruiting;
  clubUniv?: clubUniv;
  sort?: sort;
  size?: number;
  cursor?: string;
};

export const getClubList = async (params: GetClubListParams) => {
  const queryParams = new URLSearchParams();

  if (params.category) queryParams.append('category', params.category);
  if (params.type) queryParams.append('type', params.type);
  if (params.clubUniv) queryParams.append('clubUniv', params.clubUniv);
  if (params.grades && params.grades.length > 0)
    queryParams.append('grades', params.grades.join(','));
  if (params.recruiting) queryParams.append('recruiting', params.recruiting);
  if (params.sort) queryParams.append('sort', params.sort);
  if (params.size !== undefined) queryParams.append('size', String(params.size));
  if (params.cursor) queryParams.append('cursor', params.cursor);

  const data = await mainClient.get<Clubs>(`${API.USER.CLUBS}?${queryParams.toString()}`);
  return data;
};
