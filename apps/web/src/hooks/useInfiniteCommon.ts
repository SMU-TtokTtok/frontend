import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchFavoritesClubs } from '@/components/favorites/api/getFavorites';
import { fetchAppliedClubs } from '@/components/applied/api/getApplied';
import { fetchPopularClubs } from '@/components/popular/api/getPopular';
import { fetchSearchClubs } from '@/components/search/api/getSearch';
import { Clubs } from '@/common/model/clubInfinite';
import { ClubBoardList } from '@/common/model/clubBoard';
import { getClubBoards } from '@/components/clubInfo/api/getClubBoards';
import { userKey, clubMemberKey, clubBoardKey } from './queries/key';
import { getClubMember } from '@/components/admin/clubMember/api/getClubMember';
import { ClubMember } from '@/components/admin/clubMember/api/getClubMember';
import { useMemo } from 'react';

interface UseInfiniteParams {
  enabled?: boolean;
  sort?: string;
  name?: string;
  clubId?: string;
}

export const useFavoritesInfinite = ({ enabled, sort = 'latest' }: UseInfiniteParams = {}) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch, isLoading } =
    useInfiniteQuery<Clubs, Error>({
      queryKey: [...userKey.favoritesClubList, sort],
      queryFn: ({ pageParam }) =>
        fetchFavoritesClubs({ sort, size: 20, cursor: pageParam as string }),
      initialPageParam: undefined, // 첫 요청은 cursor 없이
      getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.nextCursor : undefined),
      enabled,
    });

  return { fetchNextPage, hasNextPage, isFetchingNextPage, refetch, data, isLoading };
};

export const useAppliedInfinite = ({ enabled, sort = 'latest' }: UseInfiniteParams = {}) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch, isLoading } =
    useInfiniteQuery<Clubs, Error>({
      queryKey: [...userKey.appliedClubList, sort],
      queryFn: ({ pageParam }) =>
        fetchAppliedClubs({ sort, size: 20, cursor: pageParam as string }),
      initialPageParam: undefined, // 첫 요청은 cursor 없이
      getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.nextCursor : undefined),
      enabled,
    });

  return { fetchNextPage, hasNextPage, isFetchingNextPage, refetch, data, isLoading };
};

export const usePopularInfinite = ({ enabled, sort = 'latest' }: UseInfiniteParams = {}) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch, isLoading } =
    useInfiniteQuery<Clubs, Error>({
      queryKey: [...userKey.popularClubList, sort],
      queryFn: ({ pageParam }) =>
        fetchPopularClubs({ sort, size: 20, cursor: pageParam as string }),
      initialPageParam: undefined, // 첫 요청은 cursor 없이
      getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.nextCursor : undefined),
      enabled,
    });

  return { fetchNextPage, hasNextPage, isFetchingNextPage, refetch, data, isLoading };
};

export const useSearchInfinite = ({ enabled, sort = 'latest', name }: UseInfiniteParams = {}) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch, isLoading } =
    useInfiniteQuery<Clubs, Error>({
      queryKey: [...userKey.searchClubList, sort, name],
      queryFn: ({ pageParam }) =>
        fetchSearchClubs({ name, sort, size: 20, cursor: pageParam as string }),
      initialPageParam: undefined, // 첫 요청은 cursor 없이
      getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.nextCursor : undefined),
      enabled,
    });

  return { fetchNextPage, hasNextPage, isFetchingNextPage, refetch, data, isLoading };
};

export const useClubBoardInfinite = ({ enabled = true, clubId }: UseInfiniteParams) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch, isLoading } =
    useInfiniteQuery<ClubBoardList, Error>({
      queryKey: [...clubBoardKey.clubBoardList, clubId],
      queryFn: ({ pageParam }) =>
        getClubBoards({ clubId: clubId!, size: 20, cursor: pageParam as string | undefined }),
      initialPageParam: undefined, // 첫 요청은 cursor 없이
      getNextPageParam: (lastPage) => (lastPage.hasNext ? lastPage.nextCursor : undefined),
      enabled: enabled && Boolean(clubId),
    });

  const pages = data?.pages;
  const boards = useMemo(() => {
    if (!pages) return [];
    return pages.flatMap((page) => page.boards || []);
  }, [pages]);

  return { boards, fetchNextPage, hasNextPage, isFetchingNextPage, refetch, isLoading };
};

export const useClubMemberInfinite = ({ enabled, clubId }: UseInfiniteParams) => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } =
    useInfiniteQuery<ClubMember, Error>({
      queryKey: [clubMemberKey.clubMember],
      queryFn: ({ pageParam }) => getClubMember({ page: pageParam as number, clubId: clubId! }),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        // 다음 페이지가 있으면 다음 페이지 번호 반환, 없으면 undefined
        if (lastPage.currentPage < lastPage.totalPage) {
          return lastPage.currentPage + 1;
        }
        return undefined;
      },
      enabled,
    });
  const pages = data?.pages;
  const clubMembers = useMemo(() => {
    if (!pages) return [];
    return pages.flatMap((page) => page.clubMembers || []);
  }, [pages]);
  return { clubMembers, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage, refetch };
};
