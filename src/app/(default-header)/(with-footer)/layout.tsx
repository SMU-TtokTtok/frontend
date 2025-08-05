import { FOOTER } from '@/common/constants';
import Footer from '@/common/ui/footer';
import * as S from '@/app/layout.css';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={S.withFooterContent}>{children}</div>
      <Footer serviceName={FOOTER.serviceName} informationUrl={FOOTER.informationUrl} />
    </>
  );
}

export default Layout;
