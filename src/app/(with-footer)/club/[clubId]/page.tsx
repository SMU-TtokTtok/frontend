'use client';

import * as S from '@/components/clubInfo/index.css';
import BackButton from '@/components/clubInfo/BackButton';
import ClubProfile from '@/components/clubInfo/ClubProfile';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { getClubInfo } from '@/components/clubInfo/api/getClubInfo';

export default function Page() {
  const { clubId } = useParams();

  useEffect(() => {
    const fetchClubInfo = async () => {
      const clubInfo = await getClubInfo(Number(clubId));
      console.log(clubInfo);
    };
    fetchClubInfo();
  }, [clubId]);

  return (
    <div className={S.container}>
      <div className={S.wrapper}>
        <BackButton />
        <ClubProfile />
      </div>
    </div>
  );
}
