'use client';
import ClubMemberAddPage from '@/components/admin/clubMember/clubMemberAdd';
import { Suspense } from 'react';

export default function page() {
  return (
    <Suspense>
      <ClubMemberAddPage />
    </Suspense>
  );
}
