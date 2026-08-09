'use client';

import { Suspense, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import * as S from '@/components/clubInfo/index.css';
import BackButton from '@/components/clubInfo/BackButton';
import ClubProfile from '@/components/clubInfo/ClubProfile';
import ClubIntroduce from '@/components/clubInfo/ClubIntro';
import RightSide from '@/components/clubInfo/RightSide';
import { useParams } from 'next/navigation';
import { useClubInfo } from '@/hooks/useClubInfo';
import LoadingSpinner from '@/common/ui/loading';
import { useScrollTop } from '@/hooks/useScrollTop';

const ClubInfoPage = () => {
  const { clubId } = useParams();
  const { data } = useClubInfo(clubId as string);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useScrollTop();

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1440);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <div className={S.wrapper}>
          <div className={S.container}>
            <div className={S.leftcontainer}>
              <BackButton />
              <ClubProfile clubIntro={data} clubId={clubId as string} />
              {!isLargeScreen && <RightSide clubIntro={data} clubId={clubId as string} />}
              <ClubIntroduce introduction={data.content} clubId={clubId as string} />
            </div>

            {isLargeScreen && <RightSide clubIntro={data} clubId={clubId as string} />}
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default dynamic(() => Promise.resolve(ClubInfoPage), { ssr: false });
