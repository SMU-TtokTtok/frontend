'use client';
import UnExpectedErrorPage from '@/components/error';

function ErrorPage({ error, reset }: { error?: Error; reset: () => void }) {
  return <UnExpectedErrorPage error={error} reset={reset} />;
}

export default ErrorPage;
