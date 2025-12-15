import ClientHeader from '@/common/components/header/clientHeader';
import 'ttockttock-design-system/styles';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ClientHeader />
      {children}
    </>
  );
}

export default Layout;
