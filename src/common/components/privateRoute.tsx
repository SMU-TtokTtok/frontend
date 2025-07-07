'use client';
import { PropsWithChildren, useEffect } from 'react';
import { useAuthStore } from '../store/authAdmin';
import { useRouter } from 'next/navigation';
import { ROUTES } from '../constants/routes';

function PrivateRoute({ children }: PropsWithChildren) {
  const { isAuthenticated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push(ROUTES.ADMIN_LOGIN);
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}

export default PrivateRoute;
