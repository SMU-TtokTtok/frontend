'use client';

import { useEffect, useState } from 'react';
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
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1440);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <div className={S.wrapper}>
      <div className={S.container}>
        <div className={S.leftcontainer}>
          <BackButton />
          <ClubProfile clubIntro={data} clubId={Number(clubId)} />
          {!isLargeScreen && <RightSide clubIntro={data} clubId={Number(clubId)} />}
          <ClubIntroduce introduction={data.content} />
        </div>

        {isLargeScreen && <RightSide clubIntro={data} clubId={Number(clubId)} />}
      </div>
    </div>
  );
}
