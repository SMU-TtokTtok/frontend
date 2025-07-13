import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchFavoritesClubs } from '@/components/favorites/api/getFavorites';
import { ClubsInfinite } from '@/common/model/clubInfinite';
import { userKey } from './queries/key';

interface UseFavoritesInfiniteParams {
  enabled?: boolean;
  sort?: string;
}

export const useFavoritesInfinite = ({
  enabled,
  sort = 'latest',
}: UseFavoritesInfiniteParams = {}) => {
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
