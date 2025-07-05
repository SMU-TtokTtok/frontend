import { UserClubIntro } from '@/common/model/clubIntro';
import * as S from './clubProfile.css';
import Image from 'next/image';
import person from '@/assets/person.svg';
import Tag from '@/common/ui/tag/index';
import star from '@/assets/star.svg';
import star_active from '@/assets/star_active.svg';

export default function ClubProfile({ clubIntro }: { clubIntro: UserClubIntro }) {
  const {
    name,
    shortDescription,
    type,
    category,
    detailField,
    isRecruiting,
    img,
    peopleCount,
    isFavorite,
  } = clubIntro;

  return (
    <div className={S.clubProfile}>
      <Image src={img} alt={name} width={212} height={206} className={S.imageStyle} />
      <div className={S.RightFlex}>
        <div className={S.type} style={{ marginBottom: '2px' }}>
          {type}
        </div>
        <div className={S.name} style={{ marginBottom: '6px' }}>
          {name}
        </div>
        <div className={S.memberFlex}>
          <Image src={person} alt="people" width={23} height={23} />
          <div className={S.member}>{peopleCount}</div>
        </div>
        <div className={S.description}>{shortDescription}</div>
        <div className={S.tagFlex}>
          <Tag variant="default" className={S.tagStyle}>
            {category}
          </Tag>
          <Tag variant="default" className={S.tagStyle}>
            {detailField}
          </Tag>
          <Tag variant={isRecruiting ? 'secondary' : 'tertiary'} className={S.tagStyle}>
            {isRecruiting ? '모집중' : '모집마감'}
          </Tag>
        </div>
        <Image
          src={isFavorite ? star_active : star}
          alt="star"
          width={29}
          height={29}
          className={S.star}
        />
      </div>
    </div>
  );
}
