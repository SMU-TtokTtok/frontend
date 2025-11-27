import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ADMIN_SIDEBAR_ITEMS } from '@/common/constants';
import * as S from './adminHeader.css';
import { ROUTES } from '@/common/constants/routes';
import arrowNav from '@/assets/arrow_nav.svg';
import { AdminProfile } from '@/common/model/adminProfile';
import { useRouter } from 'next/navigation';

interface MobileSideMenuProps {
  handleLogoutClick: () => void;
  mobileRef: React.RefObject<HTMLDivElement | null>;
  profile: AdminProfile | null;
}

function MobiledSideMenu({ handleLogoutClick, mobileRef, profile }: MobileSideMenuProps) {
  const navigate = useRouter();
  const handleLogout = () => {
    handleLogoutClick();
    navigate.push(ROUTES.ADMIN_LOGIN);
  };
  return (
    <>
      <div className={S.MobileBackdrop} />

      <div className={S.SideMenu} ref={mobileRef}>
        <div className={S.myInfo}>
          <span className={S.RightAreaIcon}></span>
          <p className={S.RightAreaText}>{profile?.clubName ?? '동아리명'}</p>
        </div>

        <div className={S.MenuItem} onClick={handleLogout}>
          <span>로그아웃</span>
          <Image src={arrowNav} alt="이동하기" />
        </div>
        <Link href={ADMIN_SIDEBAR_ITEMS[0].href} className={S.MenuItem}>
          <span>{ADMIN_SIDEBAR_ITEMS[0].label}</span>
          <Image src={arrowNav} alt="이동하기" />
        </Link>
        <Link href={ADMIN_SIDEBAR_ITEMS[1].href} className={S.MenuItem}>
          <span>{ADMIN_SIDEBAR_ITEMS[1].label}</span>
          <Image src={arrowNav} alt="이동하기" />
        </Link>
        <Link href={ADMIN_SIDEBAR_ITEMS[2].href} className={S.MenuItem}>
          <span>{ADMIN_SIDEBAR_ITEMS[2].label}</span>
          <Image src={arrowNav} alt="이동하기" />
        </Link>
        <Link href={ADMIN_SIDEBAR_ITEMS[3].href} className={S.MenuItem}>
          <span>{ADMIN_SIDEBAR_ITEMS[3].label}</span>
          <Image src={arrowNav} alt="이동하기" />
        </Link>
      </div>
    </>
  );
}

export default MobiledSideMenu;
