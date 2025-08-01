'use client';

import ClubInfoPage from '@/components/clubInfo';
import { Suspense } from 'react';
import LoadingSpinner from '@/common/ui/loading';

export default function page() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ClubInfoPage />
    </Suspense>
  );
}
