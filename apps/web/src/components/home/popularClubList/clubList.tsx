'use client';
import ClubItem from '@/common/components/clubItem';
import * as S from './popularClubList.css';
import { usePopularClubList } from '@/hooks/usePopularClubList';
import Empty from '@/common/components/empty';
interface ClubListProps {
  handleModalOpen: () => void;
}
function ClubList({ handleModalOpen }: ClubListProps) {
  const { data } = usePopularClubList();

  return (
    <>
      {data.clubs.length > 0 && (
        <ul className={S.PopularClubListWrapper}>
          {data.clubs.map((club) => (
            <ClubItem
              clubData={club}
              key={club.id}
              className={S.cardStyle}
              handleModalOpen={handleModalOpen}
            />
          ))}
        </ul>
      )}
      {!data ||
        (data.clubs.length === 0 && (
          <div className={S.emptyWrapper}>
            <Empty className={S.empty}>아직 인기동아리가 없어요!</Empty>
          </div>
        ))}
    </>
  );
}

export default ClubList;
