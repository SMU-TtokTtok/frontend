'use client';

import { useScrollObserver } from '@/hooks/useScrollObserver';
import { AdminAuthProvider, useAuthStore } from '@/common/store/adminAuthStore';
import { useLogoutMutation } from '@/hooks/useAdminMutation';
import Desktop from './desktop';
import Mobile from './mobile';

function AdminHeader() {
  const isVisible = useScrollObserver();
  const { profile } = useAuthStore();
  const { handleLogout } = useLogoutMutation();
  const handleLogoutClick = () => {
    handleLogout();
  };

  return (
    <>
      <AdminAuthProvider>
        <Desktop isVisible={isVisible} handleLogoutClick={handleLogoutClick} profile={profile} />
        <Mobile isVisible={isVisible} handleLogoutClick={handleLogoutClick} profile={profile} />
      </AdminAuthProvider>
    </>
  );
}

export default AdminHeader;
