'use client';

import InfiniteClubList from '@/components/favorites/InfiniteClublist';
import { useSearchQuery } from '@/hooks/useSearchQuery';
import SortButtonGroup from '@/components/favorites/SortButtonGroup';
import { useAppliedInfinite } from '@/hooks/useInfiniteCommon';
import { Suspense } from 'react';
import ClubItemSkeleton from '@/common/components/clubItem/ClubItemSkeleton';
import * as ClubListStyles from '@/components/home/clubList/clubList.css';

function AppliedSkeleton() {
  return (
    <div
      className={ClubListStyles.container}
      aria-busy="true"
      aria-label="지원내역 목록을 불러오는 중입니다"
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
    <Suspense fallback={<AppliedSkeleton />}>
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
