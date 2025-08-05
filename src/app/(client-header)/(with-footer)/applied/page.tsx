'use client';

import InfiniteClubList from '@/components/favorites/InfiniteClublist';
import { useSearchQuery } from '@/hooks/useSearchQuery';
import SortButtonGroup from '@/components/favorites/SortButtonGroup';
import { useAppliedInfinite } from '@/hooks/useInfiniteCommon';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense>
      <AppliedPage />
    </Suspense>
  );
}

function AppliedPage() {
  const { filter } = useSearchQuery();

  return (
    <div>
      <SortButtonGroup title="내 지원내역" filter={filter} />
      <InfiniteClubList
        title="내 지원내역"
        selectedOptions={filter}
        useInfinite={useAppliedInfinite}
      />
    </div>
  );
}
