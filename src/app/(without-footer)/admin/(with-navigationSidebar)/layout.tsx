import * as S from '../../../layout.css';

interface LayoutProps {
  children: React.ReactNode;
  navigationSidebar: React.ReactNode;
  main: React.ReactNode;
}

function Layout({ navigationSidebar, main }: LayoutProps) {
  return (
    <div className={S.rawSort}>
      <div>{navigationSidebar}</div>
      <div>{main}</div>
    </div>
  );
}

export default Layout;
