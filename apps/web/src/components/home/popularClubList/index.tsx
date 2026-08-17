import * as S from './popularClubList.css';
import ClubList from './clubList';
import Slider from './slider';
import Link from 'next/link';
import { ROUTES } from '@/common/constants/routes';
import ClubItemSkeleton from '@/common/components/clubItem/ClubItemSkeleton';
import { Suspense } from 'react';

function PopularClubListSkeleton() {
  return (
    <ul className={S.PopularClubListWrapper} aria-hidden="true">
      {Array.from({ length: 4 }).map((_, index) => (
        <ClubItemSkeleton key={index} className={S.cardStyle} />
      ))}
    </ul>
  );
}

function PopularClubList() {
  return (
    <div>
      <div className={S.TitleWrapper}>
        <h3 className={S.Title}>🏆 인기 동아리</h3>
        <Link href={`${ROUTES.POPULAR}`}>
          <p className={S.Plus}>더보기</p>
        </Link>
      </div>
      <Suspense
        fallback={
          <Slider>
            <PopularClubListSkeleton />
          </Slider>
        }
      >
        <Slider>
          <ClubList />
        </Slider>
      </Suspense>
    </div>
  );
}

export default PopularClubList;
