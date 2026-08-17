'use client';
import { useClubsInfinite } from '@/hooks/useClubsInfinite';
import * as S from './clubList.css';
import ClubItem from '@/common/components/clubItem';
import ClubItemSkeleton from '@/common/components/clubItem/ClubItemSkeleton';
import { SearchQueryReturn } from '@/hooks/useSearchQuery';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Empty from '@/common/components/empty';
import { useModal } from '@/hooks/useModal';
import ConfirmModal from '@/common/components/confirmModal';
interface ClubListProps {
  selectedOptions: SearchQueryReturn;
}

function ClubList({ selectedOptions }: ClubListProps) {
  const { clubs, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useClubsInfinite({
    selectedOptions,
  });
  const isEmpty = clubs.length === 0;
  const { ref, inView } = useInView();
  const { isOpen, handleModalClose, handleModalOpen } = useModal();
  const [favoriteModalMessage, setFavoriteModalMessage] = useState('');

  const handleFavoriteResult = (favorited: boolean) => {
    setFavoriteModalMessage(
      favorited ? '즐겨찾기에 추가했어요.' : '즐겨찾기를 취소했어요.',
    );
    handleModalOpen();
  };

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <div className={S.container} aria-busy="true" aria-label="동아리 목록을 불러오는 중입니다">
        <ul className={S.innerWrapper}>
          {Array.from({ length: 8 }).map((_, index) => (
            <ClubItemSkeleton key={index} className={S.cardStyle} />
          ))}
        </ul>
      </div>
    );
  }

  return (
    <div className={S.container}>
      {!isEmpty && (
        <ul className={S.innerWrapper}>
          {clubs &&
            clubs.map((club, index) => (
              <ClubItem
                key={index}
                className={S.cardStyle}
                clubData={club}
                onFavoriteResult={handleFavoriteResult}
              />
            ))}
        </ul>
      )}
      {isEmpty && <Empty className={S.emptyText}>동아리 목록이 없습니다</Empty>}
      <div ref={ref} />
      {isFetchingNextPage && (
        <ul className={S.innerWrapper} aria-hidden="true">
          {Array.from({ length: 4 }).map((_, index) => (
            <ClubItemSkeleton key={index} className={S.cardStyle} />
          ))}
        </ul>
      )}
      <ConfirmModal isOpen={isOpen} onClose={handleModalClose}>
        {favoriteModalMessage}
      </ConfirmModal>
    </div>
  );
}

export default ClubList;
