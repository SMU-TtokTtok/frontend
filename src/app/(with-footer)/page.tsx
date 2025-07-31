'use client';
import LoadingSpinner from '@/common/ui/loading';
import ClubList from '@/components/home/clubList';
import Filter from '@/components/home/filter';
import PopularClubList from '@/components/home/popularClubList/index';
import * as S from '@/components/home/popularClubList/popularClubList.css';
import { useSearchQuery } from '@/hooks/useSearchQuery';
import { Suspense } from 'react';

export default function Home() {
  const { filter } = useSearchQuery();
  return (
    <div>
      <div className={S.Container}>
        <div className={S.InnerWrapper}>
          <PopularClubList />
        </div>
      </div>
      <Filter selectedOptions={filter} />
      <Suspense fallback={<LoadingSpinner />}>
        <ClubList selectedOptions={filter} />
      </Suspense>
    </div>
  );
}
