'use client';
import { useEffect, useRef, useState } from 'react';

export const MSWProvider = ({ children }: { children: React.ReactNode }) => {
  const [isMocking, setIsMocking] = useState(false);
  const isWorkerStarted = useRef(false);

  useEffect(() => {
    async function enableApiMocking() {
      if (
        typeof window !== 'undefined' &&
        !isWorkerStarted.current &&
        process.env.NEXT_PUBLIC_API_MOCKING === 'enabled'
      ) {
        isWorkerStarted.current = true;
        const { worker } = await import('./browser');
        await worker.start();
        console.log('Worker started');
        setIsMocking(true);
      }
    }

    enableApiMocking();
  }, []);

  if (!isMocking) {
    return null; 
  }

  return <>{children}</>; 
};
