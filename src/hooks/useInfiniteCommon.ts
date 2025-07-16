import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchFavoritesClubs } from '@/components/favorites/api/getFavorites';
import { fetchAppliedClubs } from '@/components/applied/api/getApplied';
import { fetchPopularClubs } from '@/components/popular/api/getPopular';
import { fetchSearchClubs } from '@/components/search/api/getSearch';
import { ClubsInfinite } from '@/common/model/clubInfinite';
import { userKey } from './queries/key';

interface UseInfiniteParams {
  enabled?: boolean;
  sort?: string;
  name?: string;
}

export const useFavoritesInfinite = ({ enabled, sort = 'latest' }: UseInfiniteParams = {}) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } = useInfiniteQuery<
    ClubsInfinite,
    Error
  >({
    queryKey: [...userKey.favoritesClubList, sort],
    queryFn: ({ pageParam }) =>
      fetchFavoritesClubs({ sort, size: 20, cursor: pageParam as string }),
    initialPageParam: undefined, // 첫 요청은 cursor 없이
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.nextCursor : undefined),
    enabled,
  });

  return { fetchNextPage, hasNextPage, isFetchingNextPage, refetch, data };
};

export const useAppliedInfinite = ({ enabled, sort = 'latest' }: UseInfiniteParams = {}) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } = useInfiniteQuery<
    ClubsInfinite,
    Error
  >({
    queryKey: [...userKey.appliedClubList, sort],
    queryFn: ({ pageParam }) => fetchAppliedClubs({ sort, size: 20, cursor: pageParam as string }),
    initialPageParam: undefined, // 첫 요청은 cursor 없이
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.nextCursor : undefined),
    enabled,
  });

  return { fetchNextPage, hasNextPage, isFetchingNextPage, refetch, data };
};

export const usePopularInfinite = ({ enabled, sort = 'latest' }: UseInfiniteParams = {}) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } = useInfiniteQuery<
    ClubsInfinite,
    Error
  >({
    queryKey: [...userKey.popularClubList, sort],
    queryFn: ({ pageParam }) => fetchPopularClubs({ sort, size: 20, cursor: pageParam as string }),
    initialPageParam: undefined, // 첫 요청은 cursor 없이
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.nextCursor : undefined),
    enabled,
  });

  return { fetchNextPage, hasNextPage, isFetchingNextPage, refetch, data };
};

export const useSearchInfinite = ({ enabled, sort = 'latest', name }: UseInfiniteParams = {}) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } = useInfiniteQuery<
    ClubsInfinite,
    Error
  >({
    queryKey: [...userKey.searchClubList, sort, name],
    queryFn: ({ pageParam }) =>
      fetchSearchClubs({ name, sort, size: 20, cursor: pageParam as string }),
    initialPageParam: undefined, // 첫 요청은 cursor 없이
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.nextCursor : undefined),
    enabled,
  });

  return { fetchNextPage, hasNextPage, isFetchingNextPage, refetch, data };
};
