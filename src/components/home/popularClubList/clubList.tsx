import ClubItem from '@/common/components/clubItem';
import { ClubItemInfo } from '@/common/model/club';
interface ClubListProps {
  clubData: ClubItemInfo[];
}

function ClubList({ clubData }: ClubListProps) {
  return (
    <div>
      {clubData.map((club) => (
        <ClubItem key={club.id} clubData={club} />
      ))}
    </div>
  );
}

export default ClubList;
