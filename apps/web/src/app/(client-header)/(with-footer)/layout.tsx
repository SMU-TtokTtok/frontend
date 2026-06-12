import { FOOTER } from '@/common/constants';
import Footer from '@/common/ui/footer';
import * as S from '@/app/layout.css';
import InitTrie from '@/common/components/InitTrie';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={S.withFooterContent}>{children}</div>
      <InitTrie />
      <Footer
        serviceName={FOOTER.serviceName}
        informationUrl={FOOTER.informationUrl}
        feedbackUrl={FOOTER.feedbackUrl}
      />
    </>
  );
}

export default Layout;
