'use client';
import * as S from './header.css';
import { PropsWithChildren } from 'react';
interface HeaderProps {
  className?: string;
  isVisible: boolean;
}
function Header({ className, isVisible, children }: PropsWithChildren<HeaderProps>) {
  const innerWrapper = `${S.InnerWrapper} ${className}`;
  return (
    <header className={`${S.Container} ${isVisible ? S.visible : S.hidden}`}>
      <div className={S.Wrapper}>
        <div className={innerWrapper}>{children}</div>
      </div>
    </header>
  );
}

export default Header;
