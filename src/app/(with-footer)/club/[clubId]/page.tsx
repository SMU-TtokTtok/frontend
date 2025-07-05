'use client';

import * as S from '@/components/clubInfo/index.css';
import BackButton from '@/components/clubInfo/BackButton';
import ClubProfile from '@/components/clubInfo/ClubProfile';
import ClubIntroduce from '@/components/clubInfo/ClubIntro';
import RightSide from '@/components/clubInfo/RightSide';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getClubInfo } from '@/components/clubInfo/api/getClubInfo';
import { UserClubIntro } from '@/common/model/clubIntro';

export default function Page() {
  const { clubId } = useParams();
  const [clubIntro, setClubIntro] = useState<UserClubIntro | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClubInfo = async () => {
      const data = await getClubInfo(Number(clubId));
      setClubIntro(data);
      setLoading(false);
      console.log(data);
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
        <RightSide clubIntro={clubIntro} />
        <ClubIntroduce introduction={clubIntro.introduction} />
      </div>
    </div>
  );
}
