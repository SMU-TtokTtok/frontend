'use client';
import { ClubItemInfo } from '@/common/model/club';
import * as S from './clubItem.css';
import Image from 'next/image';
import emptyStar from '@/assets/star.svg';
import ActiveStar from '@/assets/star_active.svg';
import person from '@/assets/person.svg';
import RecruitStatus from './recruitStatus';
import { usePatchFavorite } from '@/hooks/useFavoriteMutation';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/common/constants/routes';
import Tag from '@/common/ui/tag';
import { FILTER_CONFIG } from '@/common/constants';
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
  const clubType = FILTER_CONFIG.type.find((value) => clubData.clubType === value.value)?.label;
  const clubCategory = FILTER_CONFIG.category.find(
    (value) => clubData.clubCategory === value.value,
  )?.label;
  return (
    <li className={`${S.container} ${className}`} onClick={handleClubDetail}>
      <div className={S.headerWrapper}>
        <p className={S.separation}>{clubType}</p>
        <Image
          src={clubData.bookmarked ? ActiveStar : emptyStar}
          className={S.star}
          alt="즐겨찾기"
          onClick={(e) => {
            e.stopPropagation();
            handleFavoriteStatus({ clubId: clubData.id });
          }}
        />
      </div>
      <div className={S.content}>
        <p className={S.name}>{clubData.name}</p>
        <div className={S.membersWrapper}>
          <Image src={person} className={S.person} alt="멤버 수" />
          <p className={S.members}>{clubData.clubMemberCount}</p>
        </div>
      </div>
      <div className={S.categoryWrapper}>
        <Tag key={clubData.clubCategory} className={S.tagStyle} variant="default">
          {clubCategory}
        </Tag>
        {clubData.customCategory && (
          <Tag key={clubData.customCategory} className={S.tagStyle} variant="default">
            {clubData.customCategory}
          </Tag>
        )}
        <span className={S.verticalLine} />
        <RecruitStatus isRecruiting={clubData.recruiting} />
      </div>
    </li>
  );
}

export default ClubItem;
