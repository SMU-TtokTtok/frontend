'use client';

import InfiniteClubList from '@/components/favorites/InfiniteClublist';
import { useSearchQuery } from '@/hooks/useSearchQuery';
import SortButtonGroup from '@/components/favorites/SortButtonGroup';
import { useFavoritesInfinite } from '@/hooks/useInfiniteCommon';
import { Suspense } from 'react';
import ClubItemSkeleton from '@/common/components/clubItem/ClubItemSkeleton';
import * as ClubListStyles from '@/components/home/clubList/clubList.css';

function FavoritesSkeleton() {
  return (
    <div
      className={ClubListStyles.container}
      aria-busy="true"
      aria-label="즐겨찾기 목록을 불러오는 중입니다"
    >
      <ul className={ClubListStyles.innerWrapper}>
        {Array.from({ length: 8 }).map((_, index) => (
          <ClubItemSkeleton key={index} className={ClubListStyles.cardStyle} />
        ))}
      </ul>
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<FavoritesSkeleton />}>
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
