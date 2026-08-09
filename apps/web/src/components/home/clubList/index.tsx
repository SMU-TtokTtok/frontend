'use client';
import { useClubsInfinite } from '@/hooks/useClubsInfinite';
import * as S from './clubList.css';
import ClubItem from '@/common/components/clubItem';
import { SearchQueryReturn } from '@/hooks/useSearchQuery';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Empty from '@/common/components/empty';
import LoadingSpinner from '@/common/ui/loading';
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
    return <LoadingSpinner />;
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
      <ConfirmModal isOpen={isOpen} onClose={handleModalClose}>
        {favoriteModalMessage}
      </ConfirmModal>
    </div>
  );
}

export default ClubList;
