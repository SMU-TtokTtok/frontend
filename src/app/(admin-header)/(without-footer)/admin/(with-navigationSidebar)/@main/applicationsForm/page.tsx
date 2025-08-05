'use client';
import LoadingSpinner from '@/common/ui/loading';
import ApplicationFormPage from '@/components/admin/applicationForm';
import { Suspense } from 'react';

function Page() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <ApplicationFormPage />
    </Suspense>
  );
}

export default Page;
