'use client';
import Message from '@/components/admin/message';
import { Suspense } from 'react';

export default function Page() {
  return (
    <Suspense>
      <Message />
    </Suspense>
  );
}
