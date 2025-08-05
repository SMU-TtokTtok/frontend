'use client';

import InfiniteClubList from '@/components/favorites/InfiniteClublist';
import { useSearchQuery } from '@/hooks/useSearchQuery';
import SortButtonGroup from '@/components/favorites/SortButtonGroup';
import { usePopularInfinite } from '@/hooks/useInfiniteCommon';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense>
      <PopularPage />
    </Suspense>
  );
}

function PopularPage() {
  const { filter } = useSearchQuery();

  return (
    <div>
      <SortButtonGroup title="🏆 인기 동아리" filter={filter} />
      <InfiniteClubList
        title="인기 동아리"
        selectedOptions={filter}
        useInfinite={usePopularInfinite}
      />
    </div>
  );
}
