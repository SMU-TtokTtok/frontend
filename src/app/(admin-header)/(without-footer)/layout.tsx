import * as S from '@/app/layout.css';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className={S.withoutFooterContent}>{children}</div>
    </>
  );
}

export default Layout;
