'use client';
import { useEffect, useRef, useState } from 'react';

export const MSWProvider = ({ children }: { children: React.ReactNode }) => {
  const isMockingEnabled = process.env.NEXT_PUBLIC_API_MOCKING === 'enabled';
  const [isMockingReady, setIsMockingReady] = useState(!isMockingEnabled);
  const isWorkerStarted = useRef(false);

  useEffect(() => {
    async function enableApiMocking() {
      if (typeof window !== 'undefined' && !isWorkerStarted.current && isMockingEnabled) {
        isWorkerStarted.current = true;
        const { worker } = await import('./browser');
        await worker.start();
        setIsMockingReady(true);
      }
    }

    enableApiMocking();
  }, [isMockingEnabled]);

  if (!isMockingEnabled) {
    return <>{children}</>;
  }

  if (!isMockingReady) {
    return null;
  }

  return <>{children}</>;
};
