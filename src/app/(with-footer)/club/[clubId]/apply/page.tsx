'use client';

// import { useParams } from 'next/navigation';
import * as S from '@/components/apply/index.css';
import BackButton from '@/components/clubInfo/BackButton';

export default function Page() {
  // const { clubId } = useParams();

  return (
    <div className={S.container}>
      <div className={S.wrapper}>
        <BackButton title="지원 폼 작성" />
      </div>
    </div>
  );
}
