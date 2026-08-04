'use client';
import { useEffect, useRef, useState } from 'react';

export const MSWProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMocking, setIsMocking] = useState(false);
  const isWorkerStarted = useRef(false);
  const isApiMockingEnabled = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled';

  useEffect(() => {
    async function enableApiMocking() {
      if (
        typeof window !== 'undefined' &&
        !isWorkerStarted.current &&
        isApiMockingEnabled
      ) {
        isWorkerStarted.current = true;
        const { worker } = await import('./browser');
        await worker.start();
        setIsMocking(true);
      }
    }

    enableApiMocking();
  }, [isApiMockingEnabled]);

  if (!isApiMockingEnabled) {
    return <>{children}</>;
  }

  if (!isMocking) {
    return null;
  }

  return <>{children}</>;
};
