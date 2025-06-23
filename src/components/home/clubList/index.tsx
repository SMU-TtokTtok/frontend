'use client';
import { useClubSInfinite } from '@/hooks/useClubsInfinite';
import * as S from './clubList.css';
import ClubItem from '@/common/components/clubItem';
import { SearchQueryReturn } from '@/hooks/useSearchQuery';
interface ClubListProps {
  selectedOptions: SearchQueryReturn;
}

function ClubList({ selectedOptions }: ClubListProps) {
  const { data } = useClubSInfinite({ selectedOptions });
  // 필터링 적용후 무한스크롤 구현할게요! by 형준
  return (
    <div className={S.container}>
      <ul className={S.innerWrapper}>
        {data &&
          data.map((club) => <ClubItem key={club.id} className={S.cardStyle} clubData={club} />)}
      </ul>
    </div>
  );
}

export default ClubList;
