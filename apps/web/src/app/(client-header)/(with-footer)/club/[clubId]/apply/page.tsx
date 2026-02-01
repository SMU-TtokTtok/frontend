'use client';

// import { useParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import * as S from '@/components/apply/index.css';
import BackButton from '@/components/clubInfo/BackButton';
// import RightSide from '@/components/apply/RightSide';
import { useParams } from 'next/navigation';

const Form = dynamic(() => import('@/components/apply/Form'), { ssr: false });

export default function Page() {
  const params = useParams();
  const clubId = params.clubId as string;

  return (
    <div className={S.wrapper}>
      <div className={S.container}>
        <BackButton title="지원 폼 작성" />
        <Form clubId={clubId} />
        {/* <RightSide /> */}
      </div>
    </div>
  );
}
