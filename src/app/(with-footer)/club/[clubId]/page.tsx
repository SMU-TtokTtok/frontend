'use client';

import * as S from '@/components/clubInfo/index.css';
import BackButton from '@/components/clubInfo/BackButton';
import ClubProfile from '@/components/clubInfo/ClubProfile';
import ClubIntroduce from '@/components/clubInfo/ClubIntro';
import RightSide from '@/components/clubInfo/RightSide';
import { useParams } from 'next/navigation';
import { useClubInfo } from '@/hooks/useClubInfo';

export default function Page() {
  const { clubId } = useParams();
  const { data } = useClubInfo(Number(clubId));

  return (
    <div className={S.container}>
      <div className={S.wrapper}>
        <BackButton />
        <ClubProfile clubIntro={data} />
        <RightSide clubIntro={data} clubId={Number(clubId)} />
        <ClubIntroduce introduction={data.introduction} />
      </div>
    </div>
  );
}
