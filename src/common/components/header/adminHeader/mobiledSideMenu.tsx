import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ADMIN_SIDEBAR_ITEMS } from '@/common/constants';
import * as S from './adminHeader.css';
import arrowNav from '@/assets/arrow_nav.svg';
import { AdminProfile } from '@/common/model/adminProfile';

interface MobileSideMenuProps {
  handleLogoutClick: () => void;
  mobileRef: React.RefObject<HTMLDivElement | null>;
  profile: AdminProfile | null;
}

function MobiledSideMenu({ handleLogoutClick, mobileRef, profile }: MobileSideMenuProps) {
  return (
    <>
      <div className={S.MobileBackdrop} />

      <div className={S.SideMenu} ref={mobileRef}>
        <div className={S.myInfo}>
          <span className={S.RightAreaIcon}></span>
          <p className={S.RightAreaText}>{profile?.clubName ?? '동아리명'}</p>
        </div>

        <button type="button" className={S.MenuItem} onClick={handleLogoutClick}>
          <span>로그아웃</span>
          <Image src={arrowNav} alt="이동하기" />
        </button>

        {ADMIN_SIDEBAR_ITEMS.map(({ href, label }) => (
          <Link key={href} href={href} className={S.MenuItem}>
            <span>{label}</span>
            <Image src={arrowNav} alt="이동하기" />
          </Link>
        ))}
      </div>
    </>
  );
}

export default MobiledSideMenu;
