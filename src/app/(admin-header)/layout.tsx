import AdminHeader from '@/common/components/header/adminHeader';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AdminHeader />
      {children}
    </>
  );
}

export default Layout;
