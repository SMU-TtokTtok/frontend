'use client';

import InfiniteClubList from '@/components/favorites/InfiniteClublist';
import { useSearchQuery } from '@/hooks/useSearchQuery';
import SortButtonGroup from '@/components/favorites/SortButtonGroup';
import { useFavoritesInfinite } from '@/hooks/useInfiniteCommon';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense>
      <FavoritesPage />
    </Suspense>
  );
}
function FavoritesPage() {
  const { filter } = useSearchQuery();

  return (
    <div>
      <SortButtonGroup title="즐겨찾기" filter={filter} />
      <InfiniteClubList
        title="즐겨찾기"
        selectedOptions={filter}
        useInfinite={useFavoritesInfinite}
        isFavorite={true}
      />
    </div>
  );
}
