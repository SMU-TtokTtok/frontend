import React, { ReactNode } from 'react';
import * as S from './sidebar.css';

interface SidebarProps {
  className?: string;
  children: ReactNode;
}

const NavigationSidebar = ({ className, children }: SidebarProps) => {
  const classNames = `${S.sidebarContainer} ${className ?? ''} `;

  return <aside className={`${classNames}`}>{children}</aside>;
};

export default NavigationSidebar;
