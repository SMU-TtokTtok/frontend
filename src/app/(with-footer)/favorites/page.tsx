'use client';

import InfiniteClubList from '@/components/favorites/InfiniteClublist';
import { useSearchQuery } from '@/hooks/useSearchQuery';
import SortButtonGroup from '@/components/favorites/SortButtonGroup';
import { useFavoritesInfinite } from '@/hooks/useFavoritesInfinite';

export default function Page() {
  const { filter } = useSearchQuery();

  return (
    <div>
      <SortButtonGroup title="즐겨찾기" filter={filter} />
      <InfiniteClubList
        title="즐겨찾기"
        selectedOptions={filter}
        useInfinite={useFavoritesInfinite}
      />
    </div>
  );
}
