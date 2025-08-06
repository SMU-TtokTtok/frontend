'use client';
import LoadingSpinner from '@/common/ui/loading';
import dynamic from 'next/dynamic';
import * as S from './applicants.css';
import { Suspense } from 'react';
const ApplicantsContentPage = dynamic(() => import('@/components/admin/applicants/index'), {
  ssr: false,
});

function ApplicantsPage() {
  return (
    <Suspense fallback={<LoadingSpinner className={S.loading} />}>
      <ApplicantsContentPage />
    </Suspense>
  );
}
export default ApplicantsPage;
