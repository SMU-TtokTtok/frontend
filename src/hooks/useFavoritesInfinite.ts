import { useInfiniteQuery } from '@tanstack/react-query';
import { ClubItemInfo } from '@/common/model/club';
import { fetchFavoritesClubs } from '@/components/favorites/api/getFavorites';

interface ClubsApiResponse {
  clubs: ClubItemInfo[];
  size: number;
  hasNext: boolean;
  nextCursor: string | null;
}

interface UseFavoritesInfiniteParams {
  enabled?: boolean;
  sort?: string;
}

export const useFavoritesInfinite = ({
  enabled,
  sort = 'latest',
}: UseFavoritesInfiniteParams = {}) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } = useInfiniteQuery<
    ClubsApiResponse,
    Error
  >({
    queryKey: ['favoritesList', sort],
    queryFn: ({ pageParam }) =>
      fetchFavoritesClubs({ sort, size: 20, cursor: pageParam as string }),
    initialPageParam: undefined, // 첫 요청은 cursor 없이
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.nextCursor : undefined),
    enabled,
  });
  // console.log(data);
  return { fetchNextPage, hasNextPage, isFetchingNextPage, refetch, data };
};
