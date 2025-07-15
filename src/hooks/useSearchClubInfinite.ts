'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { clubKey } from './queries/key';
import { getClubSearchList, sort } from '@/common/apis/searchClub';
interface useSearchClubParams {
  debouncedSearch: string;
  sort?: sort;
}

export const useSearchClubInfinite = ({ debouncedSearch, sort }: useSearchClubParams) => {
  const { searchList } = clubKey;

  const { data, isLoading } = useSuspenseQuery({
    queryKey: [searchList, debouncedSearch],
    queryFn: () => getClubSearchList(debouncedSearch, (sort as sort) ?? 'latest'),
  });
  return { data, isLoading };
};
