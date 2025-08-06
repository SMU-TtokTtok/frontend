'use client';
import ConfirmModal from '@/common/components/confirmModal';
import LoadingSpinner from '@/common/ui/loading';
import QueryErrorBoundary from '@/components/error/queryErrorBoundary';
import ClubList from '@/components/home/clubList';
import Filter from '@/components/home/filter';
import PopularClubList from '@/components/home/popularClubList/index';
import * as S from '@/components/home/popularClubList/popularClubList.css';
import { useModal } from '@/hooks/useModal';
import { useSearchQuery } from '@/hooks/useSearchQuery';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense>
      <HomePage />
    </Suspense>
  );
}

function HomePage() {
  const { filter } = useSearchQuery();
  const { isOpen, handleModalClose, handleModalOpen } = useModal();
  return (
    <div>
      <div className={S.Container}>
        <div className={S.InnerWrapper}>
          <QueryErrorBoundary>
            <PopularClubList handleModalOpen={handleModalOpen} />
          </QueryErrorBoundary>
        </div>
      </div>
      <Filter selectedOptions={filter} />
      <Suspense fallback={<LoadingSpinner />}>
        <QueryErrorBoundary>
          <ClubList selectedOptions={filter} handleModalOpen={handleModalOpen} />
        </QueryErrorBoundary>
      </Suspense>
      <ConfirmModal isOpen={isOpen} onClose={handleModalClose}>
        즐겨찾기 변경에 성공했어요!
      </ConfirmModal>
    </div>
  );
}
