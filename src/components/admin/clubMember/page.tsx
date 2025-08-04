'use client';
import LoadingSpinner from '@/common/ui/loading';
import dynamic from 'next/dynamic';
import * as S from './index.css';

const ClubMemberContentPage = dynamic(() => import('@/components/admin/clubMember/index'), {
  ssr: false,
  loading: () => <LoadingSpinner className={S.loading} />,
});

function ClubMemberPage() {
  return <ClubMemberContentPage />;
}
export default ClubMemberPage;
