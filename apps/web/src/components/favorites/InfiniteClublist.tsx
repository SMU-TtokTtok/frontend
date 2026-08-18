'use client';

import { useInView } from 'react-intersection-observer';
import * as S from '@/components/home/clubList/clubList.css';
import ClubItem from '@/common/components/clubItem';
import ClubItemSkeleton from '@/common/components/clubItem/ClubItemSkeleton';
import { useEffect, useState } from 'react';
import { SearchQueryReturn } from '@/hooks/useSearchQuery';
import * as F from './favorites.css';
import Empty from '@/common/components/empty';
import { Clubs, ClubsInfiniteWithTotal } from '@/common/model/clubInfinite';
import { ClubItemInfo } from '@/common/model/club';
import type { InfiniteData } from '@tanstack/react-query';
import { useModal } from '@/hooks/useModal';
import ConfirmModal from '@/common/components/confirmModal';

interface InfiniteClubListProps {
  useInfinite: (params: { enabled: boolean; sort: string; name?: string }) => {
    data: InfiniteData<ClubsInfiniteWithTotal | Clubs, unknown> | undefined;
    fetchNextPage: () => void;
    hasNextPage: boolean;
    isFetchingNextPage: boolean;
    refetch: () => void;
    isLoading: boolean;
  };
  selectedOptions: SearchQueryReturn;
  title: string;
  handleTotal?: (data: number) => void;
  isFavorite?: boolean;
}

function InfiniteClubList({
  selectedOptions,
  title,
  useInfinite,
  handleTotal,
  isFavorite,
}: InfiniteClubListProps) {
  const sort = selectedOptions.sort || 'latest';
  const name = selectedOptions.name || '';
  const { isOpen, handleModalClose, handleModalOpen } = useModal();
  const [favoriteModalMessage, setFavoriteModalMessage] = useState('');
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch, isLoading } = useInfinite({
    enabled: true,
    sort,
    name,
  });

  const clubs = data
    ? data.pages.flatMap((page) => {
        if (isFavorite && 'favoriteClubs' in page) {
          return (page as { favoriteClubs: ClubItemInfo[] }).favoriteClubs;
        }
        return page.clubs;
      })
    : [];
  const { ref, inView } = useInView();
  // sort가 바뀌면 무한스크롤 새로 시작 (refetch)
  useEffect(() => {
    refetch();
  }, [sort, name, refetch]);

  // inView가 true가 되면 fetchNextPage 자동 호출
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  useEffect(() => {
    if (handleTotal) {
      const firstPage = data?.pages[0];
      // totalCount가 있는 경우에만 handleTotal 호출
      if (firstPage && 'totalCount' in firstPage && typeof firstPage.totalCount === 'number') {
        handleTotal(firstPage.totalCount);
      }
    }
  }, [handleTotal, data]);

  const handleFavoriteResult = (favorited: boolean) => {
    setFavoriteModalMessage(
      favorited ? '즐겨찾기에 추가했어요.' : '즐겨찾기를 취소했어요.',
    );
    handleModalOpen();
  };

  if (isLoading) {
    return (
      <div className={S.container} aria-busy="true" aria-label={`${title} 목록을 불러오는 중입니다`}>
        <ul className={S.innerWrapper}>
          {Array.from({ length: 8 }).map((_, index) => (
            <ClubItemSkeleton key={index} className={S.cardStyle} />
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      {clubs.length === 0 ? (
        <Empty className={F.emptyText}>{title} 목록이 없습니다</Empty>
      ) : (
        <div className={S.container}>
          <ul className={S.innerWrapper}>
            {clubs.map((club, index) => (
              <ClubItem
                key={index}
                className={S.cardStyle}
                clubData={club}
                onFavoriteResult={handleFavoriteResult}
              />
            ))}
          </ul>
        </div>
      )}

      {/* 관찰용 div: 리스트 끝에 도달하면 inView가 true */}
      <div ref={ref} style={{ height: 1 }} />

      {isFetchingNextPage && (
        <div className={S.container}>
          <ul className={S.innerWrapper} aria-hidden="true">
            {Array.from({ length: 4 }).map((_, index) => (
              <ClubItemSkeleton key={index} className={S.cardStyle} />
            ))}
          </ul>
        </div>
      )}

      <ConfirmModal isOpen={isOpen} onClose={handleModalClose}>
        {favoriteModalMessage}
      </ConfirmModal>
    </>
  );
}

export default InfiniteClubList;
