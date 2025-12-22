'use client';
import { useClubsInfinite } from '@/hooks/useClubsInfinite';
import * as S from './clubList.css';
import ClubItem from '@/common/components/clubItem';
import { SearchQueryReturn } from '@/hooks/useSearchQuery';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import Empty from '@/common/components/empty';
import LoadingSpinner from '@/common/ui/loading';
interface ClubListProps {
  selectedOptions: SearchQueryReturn;
  handleModalOpen: () => void;
}

function ClubList({ selectedOptions, handleModalOpen }: ClubListProps) {
  const { clubs, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useClubsInfinite({
    selectedOptions,
  });
  const isEmpty = clubs.length === 0;
  const { ref, inView } = useInView();

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
                handleModalOpen={handleModalOpen}
              />
            ))}
        </ul>
      )}
      {isEmpty && <Empty className={S.emptyText}>동아리 목록이 없습니다</Empty>}
      <div ref={ref} />
    </div>
  );
}

export default ClubList;
