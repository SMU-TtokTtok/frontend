import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchFavoritesClubs } from '@/components/favorites/api/getFavorites';
import { ClubsInfinite } from '@/common/model/clubInfinite';

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
    queryKey: ['favoritesList', sort],
    queryFn: ({ pageParam }) =>
      fetchFavoritesClubs({ sort, size: 20, cursor: pageParam as string }),
    initialPageParam: undefined, // 첫 요청은 cursor 없이
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.nextCursor : undefined),
    enabled,
  });

  return { fetchNextPage, hasNextPage, isFetchingNextPage, refetch, data };
};
