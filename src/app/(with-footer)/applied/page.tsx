'use client';

import InfiniteClubList from '@/components/favorites/InfiniteClublist';
import { useSearchQuery } from '@/hooks/useSearchQuery';
import SortButtonGroup from '@/components/favorites/SortButtonGroup';
import { useAppliedInfinite } from '@/hooks/useAppliedInfinite';

export default function Page() {
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
