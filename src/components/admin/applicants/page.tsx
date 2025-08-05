'use client';
import LoadingSpinner from '@/common/ui/loading';
import dynamic from 'next/dynamic';
import * as S from './applicants.css';
const ApplicantsContentPage = dynamic(() => import('@/components/admin/applicants/index'), {
  ssr: false,
  loading: () => <LoadingSpinner className={S.loading} />,
});

function ApplicantsPage() {
  return <ApplicantsContentPage />;
}
export default ApplicantsPage;
