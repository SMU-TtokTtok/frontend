'use client';

import * as S from './index.css';
import { useSearchParams } from 'next/navigation';
import Header from './Header';
import Form from './Form';

function Message() {
  const searchParams = useSearchParams();
  const evaluation = searchParams.get('evaluation') || 'DOCUMENT';
  return (
    <div className={S.wrapper}>
      <Header evaluation={evaluation} />
      <Form kind={evaluation} />
    </div>
  );
}

export default Message;
