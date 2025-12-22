import { useInfiniteQuery } from '@tanstack/react-query';
import { clubKey } from './queries/key';
import {
  category,
  clubUniv,
  getClubList,
  grades,
  recruiting,
  sort,
  sortType,
} from '@/components/home/clubList/api/clubList';
import { SearchQueryReturn } from './useSearchQuery';
import { Clubs } from '@/common/model/clubInfinite';

interface UseClubListParams {
  selectedOptions: SearchQueryReturn;
  enabled?: boolean;
}

export const useClubsInfinite = ({ enabled, selectedOptions }: UseClubListParams) => {
  const { allClubList } = clubKey;
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch, isLoading } =
    useInfiniteQuery<Clubs, Error>({
      queryKey: [allClubList, selectedOptions],
      queryFn: ({ pageParam }) =>
        getClubList({
          category: selectedOptions.category as category,
          recruiting: selectedOptions.recruiting as recruiting,
          type: selectedOptions.type as sortType,
          sort: selectedOptions.sort as sort,
          grades: selectedOptions.grades ? [selectedOptions.grades as grades] : undefined,
          clubUniv: selectedOptions.clubUniv as clubUniv,
          size: 20,
          cursor: pageParam as string,
        }),
      initialPageParam: undefined,
      getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.nextCursor : undefined),
      enabled,
    });

  const clubs = data ? data.pages.flatMap((page) => page.clubs) : [];

  return { fetchNextPage, hasNextPage, isFetchingNextPage, refetch, clubs, isLoading };
};
