'use client';

// import { useParams } from 'next/navigation';
import * as S from '@/components/apply/index.css';
import BackButton from '@/components/clubInfo/BackButton';
import Form from '@/components/apply/Form';
import RightSide from '@/components/apply/RightSide';
import { useParams } from 'next/navigation';

export default function Page() {
  const params = useParams();
  const clubId = params.clubId as string;

  return (
    <div className={S.container}>
      <div className={S.wrapper}>
        <BackButton title="지원 폼 작성" />
        <Form clubId={clubId} />
        <RightSide />
      </div>
    </div>
  );
}
