interface LayoutProps {
  children: React.ReactNode;
  navigationSidebar: React.ReactNode;
  main: React.ReactNode;
}

function Layout({ navigationSidebar, main }: LayoutProps) {
  return (
    <div>
      <div>{navigationSidebar}</div>
      <div>{main}</div>
    </div>
  );
}

export default Layout;
