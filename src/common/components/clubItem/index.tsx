import { ClubItemInfo } from '@/common/model/club';

interface ClubItemProps {
  clubData: ClubItemInfo;
}

function ClubItem({ clubData }: ClubItemProps) {
  return <div>클럽 아이템 카드</div>;
}

export default ClubItem;
