'use client';
import ClubItemSkeleton from '@/common/components/clubItem/ClubItemSkeleton';
import QueryErrorBoundary from '@/components/error/queryErrorBoundary';
import ClubList from '@/components/home/clubList';
import * as ClubListStyles from '@/components/home/clubList/clubList.css';
import Filter from '@/components/home/filter';
import PopularClubList from '@/components/home/popularClubList/index';
import * as S from '@/components/home/popularClubList/popularClubList.css';
import { Suspense } from 'react';
interface HomePageProps {
  filter: Record<string, string | string[] | undefined>;
}

function HomeClubListSkeleton() {
  return (
    <div
      className={ClubListStyles.container}
      aria-busy="true"
      aria-label="동아리 목록을 불러오는 중입니다"
    >
      <ul className={ClubListStyles.innerWrapper}>
        {Array.from({ length: 8 }).map((_, index) => (
          <ClubItemSkeleton key={index} className={ClubListStyles.cardStyle} />
        ))}
      </ul>
    </div>
  );
}

function HomePage({ filter }: HomePageProps) {
  return (
    <div>
      <div className={S.Container}>
        <div className={S.InnerWrapper}>
          <QueryErrorBoundary>
            <PopularClubList />
          </QueryErrorBoundary>
        </div>
      </div>
      <Filter selectedOptions={filter} />
      <Suspense fallback={<HomeClubListSkeleton />}>
        <QueryErrorBoundary>
          <ClubList selectedOptions={filter} />
        </QueryErrorBoundary>
      </Suspense>
    </div>
  );
}

export default HomePage;
