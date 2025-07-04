'use client';

import * as S from '@/components/clubInfo/index.css';
import BackButton from '@/components/clubInfo/BackButton';
import ClubProfile from '@/components/clubInfo/ClubProfile';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getClubInfo } from '@/components/clubInfo/api/getClubInfo';
import { ClubIntro } from '@/common/model/clubIntro';

export default function Page() {
  const { clubId } = useParams();
  const [clubIntro, setClubIntro] = useState<ClubIntro | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClubInfo = async () => {
      const data = await getClubInfo(Number(clubId));
      setClubIntro(data);
      setLoading(false);
    };
    fetchClubInfo();
  }, [clubId]);

  if (loading) return <div>로딩 중...</div>;
  if (!clubIntro) return <div>데이터가 없습니다.</div>;

  return (
    <div className={S.container}>
      <div className={S.wrapper}>
        <BackButton />
        <ClubProfile clubIntro={clubIntro} />
      </div>
    </div>
  );
}
