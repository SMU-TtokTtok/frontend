import AdminNav from '@/common/components/header/adminHeader/adminNav';
function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AdminNav />
      {children}
    </>
  );
}

export default Layout;
