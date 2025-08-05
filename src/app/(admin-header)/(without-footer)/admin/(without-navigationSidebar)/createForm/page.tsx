'use client';
import CreateFormPage from '@/components/admin/applicationForm/createform';
import { Suspense } from 'react';

function Page() {
  return (
    <Suspense>
      <CreateFormPage />
    </Suspense>
  );
}

export default Page;
