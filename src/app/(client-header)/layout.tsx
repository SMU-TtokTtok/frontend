import ClientHeader from '@/common/components/header/clientHeader';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ClientHeader />
      {children}
    </>
  );
}

export default Layout;
