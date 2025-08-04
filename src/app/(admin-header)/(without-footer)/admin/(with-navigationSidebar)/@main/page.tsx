'use client';

import { Suspense } from 'react';
import LoadingSpinner from '@/common/ui/loading';
import ClubInfoPage from '@/components/admin/clubInfo/page';

function Page() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ClubInfoPage />
    </Suspense>
  );
}

export default Page;
