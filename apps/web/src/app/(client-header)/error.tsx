'use client';
import UnExpectedErrorPage from '@/components/error';
import * as S from '@/components/error/error.css';

function ErrorPage({ error, reset }: { error?: Error; reset: () => void }) {
  return <UnExpectedErrorPage error={error} reset={reset} className={S.pageContainer} />;
}

export default ErrorPage;
