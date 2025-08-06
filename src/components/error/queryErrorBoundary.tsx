import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';
import ErrorBoundary from './errorboundary';
import ErrorFallback from './index';

export default function QueryErrorBoundary({ children }: PropsWithChildren) {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallback={(props) => {
        const { error } = props;
        return <ErrorFallback error={error} />;
      }}
    >
      {children}
    </ErrorBoundary>
  );
}
