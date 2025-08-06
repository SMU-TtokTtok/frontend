import { UserClubIntro } from '@/common/model/clubIntro';
import * as S from './clubProfile.css';
import Image from 'next/image';
import person from '@/assets/person.svg';
import Tag from '@/common/ui/tag/index';
import star from '@/assets/star.svg';
import star_active from '@/assets/star_active.svg';
import { usePostFavorite } from '@/hooks/useFavoriteMutation';
import { getKoreanType } from '@/common/util/getKoreanType';
import { getKoreanCategory } from '@/common/util/getKoreanCategory';
import clubImg from '@/assets/clubImg.svg';

export default function ClubProfile({
  clubIntro,
  clubId,
  handleModalOpen,
}: {
  clubIntro: UserClubIntro;
  clubId: string;
  handleModalOpen: () => void;
}) {
  const {
    name,
    summary,
    clubType,
    clubCategory,
    customCategory,
    recruiting,
    profileImageUrl,
    clubMemberCount,
    bookmarked,
  } = clubIntro;
  const { handleFavoriteStatus } = usePostFavorite(handleModalOpen);

  return (
    <div className={S.clubProfile}>
      <Image
        src={profileImageUrl || clubImg}
        alt={name}
        width={212}
        height={206}
        className={S.imageStyle}
      />
      <div className={S.RightFlex}>
        <div className={S.type} style={{ marginBottom: '2px' }}>
          {getKoreanType(clubType)}
        </div>
        <div className={S.name}>{name}</div>
        <div className={S.memberFlex}>
          <Image src={person} alt="people" width={23} height={23} />
          <div className={S.member}>{clubMemberCount}</div>
        </div>
        <div className={S.description}>{summary}</div>
        <div className={S.tagFlex}>
          <Tag variant="default" className={S.tagStyle + ' ' + S.tagFont}>
            {getKoreanCategory(clubCategory)}
          </Tag>
          <Tag variant="default" className={S.tagStyle + ' ' + S.tagFont}>
            {customCategory}
          </Tag>
          <Tag
            variant={recruiting ? 'secondary' : 'tertiary'}
            className={S.tagStyle + ' ' + S.tagFont}
          >
            {recruiting ? '모집중' : '모집마감'}
          </Tag>
        </div>
        <Image
          src={bookmarked ? star_active : star}
          alt="star"
          width={29}
          height={29}
          className={S.star}
          onClick={(e) => {
            e.stopPropagation();
            handleFavoriteStatus({ clubId: clubId });
          }}
        />
      </div>
    </div>
  );
}
