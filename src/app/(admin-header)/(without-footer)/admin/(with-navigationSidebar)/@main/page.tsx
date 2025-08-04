'use client';

import { Suspense } from 'react';
import LoadingSpinner from '@/common/ui/loading';
import AdminClubInfoPage from '@/components/admin/clubInfo';

function Page() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <AdminClubInfoPage />
    </Suspense>
  );
}

export default Page;
