import { FOOTER } from '@/common/constants';
import Footer from '@/common/ui/footer';
import * as S from '@/app/layout.css';
import DefaultHeader from '@/common/components/header/defaultHeader';
import ClientHeader from '@/common/components/header/clientHeader';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/*<DefaultHeader />*/}
      <ClientHeader />
      <div className={S.withFooterContent}>{children}</div>
      <Footer serviceName={FOOTER.serviceName} informationUrl={FOOTER.informationUrl} />
    </>
  );
}

export default Layout;
