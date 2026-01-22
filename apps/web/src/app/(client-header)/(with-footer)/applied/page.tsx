'use client';

import InfiniteClubList from '@/components/favorites/InfiniteClublist';
import { useSearchQuery } from '@/hooks/useSearchQuery';
import SortButtonGroup from '@/components/favorites/SortButtonGroup';
import { useAppliedInfinite } from '@/hooks/useInfiniteCommon';
import { Suspense } from 'react';
import { useModal } from '@/hooks/useModal';
import ConfirmModal from '@/common/components/confirmModal';

export default function Page() {
  return (
    <Suspense>
      <AppliedPage />
    </Suspense>
  );
}

function AppliedPage() {
  const { filter } = useSearchQuery();
  const { isOpen, handleModalOpen, handleModalClose } = useModal();
  return (
    <div>
      <SortButtonGroup title="내 지원내역" filter={filter} />
      <InfiniteClubList
        title="내 지원내역"
        selectedOptions={filter}
        useInfinite={useAppliedInfinite}
        handleModalOpen={handleModalOpen}
      />
      <ConfirmModal isOpen={isOpen} onClose={handleModalClose}>
        즐겨찾기 변경에 성공했어요!
      </ConfirmModal>
    </div>
  );
}
