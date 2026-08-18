'use client';

import dynamic from 'next/dynamic';
import * as S from '@/components/apply/index.css';
import BackButton from '@/components/clubInfo/BackButton';
import { useParams } from 'next/navigation';
import { Suspense } from 'react';
import FormSkeleton from '@/components/apply/FormSkeleton';

const Form = dynamic(() => import('@/components/apply/Form'), {
  ssr: false,
  loading: () => <FormSkeleton />,
});

export default function Page() {
  const params = useParams();
  const clubId = params.clubId as string;

  return (
    <div className={S.wrapper}>
      <div className={S.container}>
        <BackButton title="지원 폼 작성" />
        <Suspense fallback={<FormSkeleton />}>
          <Form clubId={clubId} />
        </Suspense>
      </div>
    </div>
  );
}
