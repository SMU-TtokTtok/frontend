'use client';
import { ClubItemInfo } from '@/common/model/club';
import * as S from './clubItem.css';
import Image from 'next/image';
import emptyStar from '@/assets/star.svg';
import ActiveStar from '@/assets/star_active.svg';
import person from '@/assets/person.svg';
import RecruitStatus from './recruitStatus';
import TagList from './tagList';
import { usePatchFavorite } from '@/hooks/useFavoriteMutation';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/common/constants/routes';
interface ClubItemProps {
  clubData: ClubItemInfo;
  className?: string;
}

function ClubItem({ clubData, className }: ClubItemProps) {
  const { handleFavoriteStatus } = usePatchFavorite();
  const router = useRouter();
  const handleClubDetail = () => {
    router.push(ROUTES.CLUB_INFO(clubData.id));
  };

  return (
    <li className={`${S.container} ${className}`} onClick={handleClubDetail}>
      <div className={S.headerWrapper}>
        <p className={S.separation}>{clubData.separation}</p>
        <Image
          src={clubData.bookmark ? ActiveStar : emptyStar}
          className={S.star}
          alt="즐겨찾기"
          onClick={(e) => {
            e.stopPropagation();
            handleFavoriteStatus({ clubId: clubData.id });
          }}
        />
      </div>
      <p className={S.name}>{clubData.name}</p>
      <div className={S.membersWrapper}>
        <Image src={person} className={S.person} alt="멤버 수" />
        <p className={S.members}>{clubData.members}</p>
      </div>
      <div className={S.categoryWrapper}>
        <TagList category={clubData.category} />
        <span className={S.verticalLine} />
        <RecruitStatus isRecruiting={clubData.isRecruiting} />
      </div>
    </li>
  );
}

export default ClubItem;
