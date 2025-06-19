'use client';
import { ClubItemInfo } from '@/common/model/club';
import * as S from './clubItem.css';
import Image from 'next/image';
import emptyStar from '@/assets/star.svg';
import ActiveStar from '@/assets/star_active.svg';
import person from '@/assets/person.svg';
import RecruitStatus from './reqruitStatus';
import TagList from './tagList';
import { usePatchFavorite } from '@/hooks/useFavoriteMutation';
import { useRouter } from 'next/navigation';
interface ClubItemProps {
  clubData: ClubItemInfo;
}

function ClubItem({ clubData }: ClubItemProps) {
  const { handleFavoriteStatus } = usePatchFavorite();
  const router = useRouter();
  const handleClubDetail = () => {
    router.push(`/club/${clubData.id}`);
  };
  return (
    <li className={S.container} onClick={handleClubDetail}>
      <div className={S.headerWrapper}>
        <p className={S.separation}>{clubData.separation}</p>
        <Image
          src={clubData.bookmark ? ActiveStar : emptyStar}
          className={S.star}
          alt='Star'
          onClick={(e) => {
            e.stopPropagation();
            handleFavoriteStatus({ clubId: clubData.id });
          }}
        />
      </div>
      <p className={S.name}>{clubData.name}</p>
      <div className={S.membersWrapper}>
        <Image src={person} className={S.person} alt='Star' />
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
