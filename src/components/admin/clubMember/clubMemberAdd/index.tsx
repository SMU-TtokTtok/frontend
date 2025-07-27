'use client';

import * as S from './index.css';
import Header from './Header';
import Form from './Form';
import { useSearchParams } from 'next/navigation';

export default function ClubMemberAddPage() {
  const searchParams = useSearchParams();
  const role = searchParams.get('role');

  return (
    <div className={S.wrapper}>
      <div className={S.container}>
        <Header role={role || ''}></Header>
        <Form></Form>
      </div>
    </div>
  );
}
