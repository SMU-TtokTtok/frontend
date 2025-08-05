'use client';
import ClubItem from '@/common/components/clubItem';
import * as S from './popularClubList.css';
import { usePopularClubList } from '@/hooks/usePopularClubList';

function ClubList() {
  const { data } = usePopularClubList();

  return (
    <ul className={S.PopularClubListWrapper}>
      {data &&
        data.clubs.map((club) => (
          <ClubItem clubData={club} key={club.id} className={S.cardStyle} />
        ))}
    </ul>
  );
}

export default ClubList;
