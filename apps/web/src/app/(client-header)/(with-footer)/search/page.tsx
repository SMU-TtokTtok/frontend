'use client';

import InfiniteClubList from '@/components/favorites/InfiniteClublist';
import { useSearchQuery } from '@/hooks/useSearchQuery';
import SortButtonGroup from '@/components/favorites/SortButtonGroup';
import { useSearchInfinite } from '@/hooks/useInfiniteCommon';
import { Suspense, useState } from 'react';
import { useModal } from '@/hooks/useModal';
import ConfirmModal from '@/common/components/confirmModal';

export default function Page() {
  return (
    <Suspense>
      <SearchPage />
    </Suspense>
  );
}

function SearchPage() {
  const { filter } = useSearchQuery();
  const [total, setTotal] = useState<number | null>(0);
  const { isOpen, handleModalOpen, handleModalClose } = useModal();
  const handleTotal = (data: number) => {
    setTotal(data);
  };

  return (
    <div>
      <SortButtonGroup title="검색결과" filter={filter} total={total} />
      <InfiniteClubList
        title="검색결과"
        selectedOptions={filter}
        useInfinite={useSearchInfinite}
        handleTotal={handleTotal}
        handleModalOpen={handleModalOpen}
      />
      <ConfirmModal isOpen={isOpen} onClose={handleModalClose}>
        즐겨찾기 변경에 성공했어요!
      </ConfirmModal>
    </div>
  );
}
