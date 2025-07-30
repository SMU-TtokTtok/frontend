'use client';

import { ROUTES } from '@/common/constants/routes';
import Header from '@/common/ui/header';
import { useScrollObserver } from '@/hooks/useScrollObserver';
import mainlogo from '@/assets/mainlogo_wh.svg';
import Image from 'next/image';
import Link from 'next/link';
import * as S from './adminHeader.css';
import { AdminAuthProvider, useAuthStore } from '@/common/store/adminAuthStore';

function AdminHeader() {
  const isVisible = useScrollObserver();
  const { profile } = useAuthStore();
  return (
    <AdminAuthProvider>
      <Header isVisible={isVisible} className={S.InnerWrapper}>
        <Link href={ROUTES.ADMIN}>
          <Image src={mainlogo} className={S.Logo} alt="Main Logo" />
        </Link>
        <p className={S.AdminMessage}>관리자 모드로 접속하셨습니다.</p>
        <div className={S.RightArea}>
          <span className={S.RightAreaIcon}></span>
          <p className={S.RightAreaText}>{profile?.clubName ?? '동아리명'}</p>
        </div>
      </Header>
    </AdminAuthProvider>
  );
}

export default AdminHeader;
