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
import { useModal } from '@/hooks/useModal';
import ConfirmModal from '@/common/components/confirmModal';
import { useScrollTop } from '@/hooks/useScrollTop';

const ClubInfoPage = () => {
  const { clubId } = useParams();
  const { data } = useClubInfo(clubId as string);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const { isOpen, handleModalClose, handleModalOpen } = useModal();

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
              <ClubProfile
                clubIntro={data}
                clubId={clubId as string}
                handleModalOpen={handleModalOpen}
              />
              {!isLargeScreen && <RightSide clubIntro={data} clubId={clubId as string} />}
              <ClubIntroduce introduction={data.content} />
            </div>

            {isLargeScreen && <RightSide clubIntro={data} clubId={clubId as string} />}
          </div>
        </div>
      </Suspense>
      <ConfirmModal isOpen={isOpen} onClose={handleModalClose}>
        즐겨찾기 변경에 성공했어요!
      </ConfirmModal>
    </>
  );
};

export default dynamic(() => Promise.resolve(ClubInfoPage), { ssr: false });
