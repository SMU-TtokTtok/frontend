'use client';
import LoadingSpinner from '@/common/ui/loading';
import dynamic from 'next/dynamic';
import * as S from './index.css';

const ClubInfoContentPage = dynamic(() => import('@/components/admin/clubInfo/index'), {
  ssr: false,
  loading: () => <LoadingSpinner className={S.loading} />,
});

function ClubInfoPage() {
  return <ClubInfoContentPage />;
}
export default ClubInfoPage;
