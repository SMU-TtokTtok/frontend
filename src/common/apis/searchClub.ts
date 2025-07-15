import { ClubItemInfo } from '../model/club';
import { mainClient } from './ttockTtockClient';
// type은 임시로 작성했어요 by 형준
export type sort = 'latest' | 'popular' | 'member';

export const getClubSearchList = async (debouncedSearch: string, sort: sort) => {
  const data = await mainClient.get<ClubItemInfo[]>(
    `/clubs/search?name=${debouncedSearch}&sort=${sort}`,
  );

  return data;
};
