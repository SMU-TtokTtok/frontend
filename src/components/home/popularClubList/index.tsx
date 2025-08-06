import * as S from './popularClubList.css';
import ClubList from './clubList';
import Slider from './slider';
import Link from 'next/link';
import { ROUTES } from '@/common/constants/routes';
import LoadingSpinner from '@/common/ui/loading';
import { Suspense } from 'react';
interface PopularClubListProps {
  handleModalOpen: () => void;
}
function PopularClubList({ handleModalOpen }: PopularClubListProps) {
  return (
    <div>
      <div className={S.TitleWrapper}>
        <h3 className={S.Title}>🏆 인기 동아리</h3>
        <Link href={`${ROUTES.POPULAR}`}>
          <p className={S.Plus}>더보기</p>
        </Link>
      </div>
      <Suspense fallback={<LoadingSpinner />}>
        <Slider>
          <ClubList handleModalOpen={handleModalOpen} />
        </Slider>
      </Suspense>
    </div>
  );
}

export default PopularClubList;
