import { API } from '../constants/endpoints';
import { Clubs } from '../model/clubInfinite';
import { mainClient } from './ttockTtockClient';
export type sort = 'latest' | 'popular' | 'member_count';

type GetClubSearchListParams = {
  debouncedSearch: string;
  sort?: sort;
  size?: number;
  cursor?: string;
};

export const getClubSearchList = async (params: GetClubSearchListParams) => {
  const { debouncedSearch, sort, size, cursor } = params;

  const queryParams = new URLSearchParams();
  if (debouncedSearch) queryParams.append('keyword', debouncedSearch ?? '');
  if (sort) queryParams.append('sort', sort);
  if (size !== undefined) queryParams.append('size', String(params.size));
  if (cursor) queryParams.append('cursor', cursor);

  const data = await mainClient.get<Clubs>(`${API.USER.SEARCH}?${queryParams.toString()}`);

  return data;
};
