'use client';

import InfiniteClubList from '@/components/favorites/InfiniteClublist';
import { useSearchQuery } from '@/hooks/useSearchQuery';
import SortButtonGroup from '@/components/favorites/SortButtonGroup';
import { useFavoritesInfinite } from '@/hooks/useInfiniteCommon';

export default function Page() {
  const { filter } = useSearchQuery();

  return (
    <div>
      <SortButtonGroup title="검색결과" filter={filter} />
      <InfiniteClubList
        title="검색결과"
        selectedOptions={filter}
        useInfinite={useFavoritesInfinite}
      />
    </div>
  );
}
