import { ROUTES } from '@/common/constants/routes';
import Header from '@/common/ui/header';
import mainlogo from '@/assets/mainlogo_wh.svg';
import Image from 'next/image';
import Link from 'next/link';
import * as S from './adminHeader.css';
import hamburger from '@/assets/hambuger.svg';
import { AdminProfile } from '@/common/model/adminProfile';
import { useState } from 'react';

import { useOutsideClick } from '@/hooks/useOutsideClick';
import { usePreventScroll } from '@/hooks/usepreventScroll';
import MobiledSideMenu from './mobiledSideMenu';

interface MobileProps {
  isVisible: boolean;
  handleLogoutClick: () => void;
  profile: AdminProfile | null;
}

function Mobile({ isVisible, handleLogoutClick, profile }: MobileProps) {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const handleToggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };
  const ref = useOutsideClick<HTMLDivElement>(() => setIsSideMenuOpen(false));
  usePreventScroll(isSideMenuOpen);

  return (
    <Header isVisible={isVisible} className={S.MobileInnerWrapper}>
      <Link href={ROUTES.ADMIN}>
        <Image src={mainlogo} className={S.Logo} alt="Main Logo" />
      </Link>
      <Image
        src={hamburger}
        className={S.MobileHamburgerIcon}
        alt="Menu"
        onClick={handleToggleSideMenu}
      />
      {isSideMenuOpen && (
        <MobiledSideMenu handleLogoutClick={handleLogoutClick} mobileRef={ref} profile={profile} />
      )}
    </Header>
  );
}

export default Mobile;
