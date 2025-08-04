'use client';

import dynamic from 'next/dynamic';
const AdminHeader = dynamic(() => import('@/common/components/header/adminHeader/index'), {
  ssr: false,
});
function AdminNav() {
  return <AdminHeader />;
}
export default AdminNav;
