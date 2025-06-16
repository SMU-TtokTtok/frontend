import { FOOTER } from '@/common/constants';
import Footer from '@/common/ui/footer';
import { withFooterContent } from '../layout.css';
import Header from '@/common/components/header';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className={withFooterContent}>{children}</div>
      <Footer
        serviceName={FOOTER.serviceName}
        informationUrl={FOOTER.informationUrl}
      />
    </>
  );
}

export default Layout;
