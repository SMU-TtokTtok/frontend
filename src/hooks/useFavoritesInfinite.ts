import { useInfiniteQuery } from '@tanstack/react-query';
import { ClubItemInfo } from '@/common/model/club';

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
  return useInfiniteQuery<ClubsApiResponse, Error>({
    queryKey: ['favoritesList', sort],
    queryFn: async ({ pageParam }) => {
      const params = new URLSearchParams({ sort, size: '20' });
      if (typeof pageParam === 'string') params.append('cursor', pageParam);
      const res = await fetch(`/api/clubs?${params.toString()}`);
      if (!res.ok) throw new Error('Network response was not ok');
      return res.json();
    },
    initialPageParam: undefined, // 첫 요청은 cursor 없이
    getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.nextCursor : undefined),
    enabled,
  });
};
