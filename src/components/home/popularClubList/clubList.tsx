'use client';
import ClubItem from '@/common/components/clubItem';
import * as S from './popularClubList.css';
import { usePopularClubList } from '@/hooks/usePopularClubList';
interface ClubListProps {
  handleModalOpen: () => void;
}
function ClubList({ handleModalOpen }: ClubListProps) {
  const { data } = usePopularClubList();

  return (
    <ul className={S.PopularClubListWrapper}>
      {data &&
        data.clubs.map((club) => (
          <ClubItem
            clubData={club}
            key={club.id}
            className={S.cardStyle}
            handleModalOpen={handleModalOpen}
          />
        ))}
    </ul>
  );
}

export default ClubList;
