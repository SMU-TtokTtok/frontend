import * as S from '@/app/layout.css';
import AdminHeader from '@/common/components/header/adminHeader';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AdminHeader />
      <div className={S.withoutFooterContent}>{children}</div>
    </>
  );
}

export default Layout;
