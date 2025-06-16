'use client';
import Image from 'next/image';
import * as header from './header.css';
import mainlogo from '@/assets/mainlogo_wh.svg';
import Link from 'next/link';
import { ROUTES } from '@/common/constants/routes';
import NavRightSide from './navRightSide';

function Header() {
  return (
    <header className={header.Container}>
      <div className={header.Wrapper}>
        <div className={header.InnerWrapper}>
          <Link href={ROUTES.HOME}>
            <Image src={mainlogo} className={header.Logo} alt='Main Logo' />
          </Link>
          <NavRightSide />
        </div>
      </div>
    </header>
  );
}

export default Header;
