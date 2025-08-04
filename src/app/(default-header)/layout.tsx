import DefaultHeader from '@/common/components/header/defaultHeader';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DefaultHeader />
      {children}
    </>
  );
}

export default Layout;
