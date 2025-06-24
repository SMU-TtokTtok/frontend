import * as S from '@/app/layout.css';
import Header from '@/common/components/header';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className={S.withoutFooterContent}>{children}</div>
    </>
  );
}

export default Layout;
