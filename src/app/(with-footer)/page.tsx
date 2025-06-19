'use client';
import ClubList from '@/components/home/clubList';
import Filter from '@/components/home/filter';
import PopularClubList from '@/components/home/popularClubList/index';
import * as S from '@/components/home/popularClubList/popularClubList.css';

export default function Home() {
  return (
    <div>
      <div className={S.Container}>
        <div className={S.InnerWrapper}>
          <PopularClubList />
        </div>
      </div>
      <Filter />
      <ClubList />
    </div>
  );
}
