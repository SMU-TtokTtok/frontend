'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { clubKey } from './queries/key';
import { getClubSearchList, sort } from '@/common/apis/searchClub';
import { Clubs } from '@/common/model/clubInfinite';
interface useSearchClubParams {
  debouncedSearch: string;
  sort?: sort;
  enabled?: boolean;
}

export const useSearchClubInfinite = ({ debouncedSearch, sort }: useSearchClubParams) => {
  const { searchList } = clubKey;

  const isSearchEnabled = !!debouncedSearch;
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery<
    Clubs,
    Error
  >({
    queryKey: [searchList, debouncedSearch, sort],
    queryFn: ({ pageParam }) =>
      getClubSearchList({
        debouncedSearch,
        sort: (sort as sort) ?? 'latest',
        size: 20,
        cursor: pageParam as string,
      }),
    initialPageParam: undefined,
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.nextCursor : undefined),
    enabled: isSearchEnabled,
  });

  const clubs = data ? data.pages.flatMap((page) => page.clubs) : [];

  return { clubs, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage };
};
