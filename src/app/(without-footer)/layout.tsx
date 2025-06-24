import * as S from '../layout.css';
import Header from '@/common/components/header';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={S.withoutFooterContent}>
      <Header />
      {children}
    </div>
  );
}

export default Layout;
