import ClientHeader from '@/common/components/header/clientHeader';
import '@ttockttock/ui/styles';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ClientHeader />
      {children}
    </>
  );
}

export default Layout;
