'use client';
import ConfirmModal from '@/common/components/confirmModal';
import LoadingSpinner from '@/common/ui/loading';
import QueryErrorBoundary from '@/components/error/queryErrorBoundary';
import ClubList from '@/components/home/clubList';
import Filter from '@/components/home/filter';
import PopularClubList from '@/components/home/popularClubList/index';
import * as S from '@/components/home/popularClubList/popularClubList.css';
import { useModal } from '@/hooks/useModal';
import { Suspense } from 'react';
interface HomePageProps {
  filter: Record<string, string | string[] | undefined>;
}

function HomePage({ filter }: HomePageProps) {
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

export default HomePage;
