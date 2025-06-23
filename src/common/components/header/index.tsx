'use client';
import Image from 'next/image';
import * as S from './header.css';
import mainlogo from '@/assets/mainlogo_wh.svg';
import Link from 'next/link';
import { ROUTES } from '@/common/constants/routes';
import NavRightSide from './navRightSide';
import { useScrollObserver } from '@/hooks/useScrollObserver';

function Header() {
  const isVisible = useScrollObserver();
  return (
    <header className={`${S.Container} ${isVisible ? S.visible : S.hidden}`}>
      <div className={S.Wrapper}>
        <div className={S.InnerWrapper}>
          <Link href={ROUTES.HOME}>
            <Image src={mainlogo} className={S.Logo} alt="Main Logo" />
          </Link>
          <NavRightSide />
        </div>
      </div>
    </header>
  );
}

export default Header;
