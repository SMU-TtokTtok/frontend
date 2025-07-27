'use client';

import * as S from './index.css';
import Header from './Header';
import { useSearchParams } from 'next/navigation';

export default function ClubMemberAddPage() {
  const searchParams = useSearchParams();
  const role = searchParams.get('role');

  return (
    <div className={S.wrapper}>
      <div className={S.container}>
        <Header role={role || ''}></Header>
      </div>
    </div>
  );
}
