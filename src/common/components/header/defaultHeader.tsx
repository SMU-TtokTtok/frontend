'use client';
import Link from 'next/link';
import Header from '../../ui/header';
import { ROUTES } from '@/common/constants/routes';
import mainlogo from '@/assets/mainlogo_wh.svg';
import Image from 'next/image';
import { useScrollObserver } from '@/hooks/useScrollObserver';
import * as S from './defaultHeader.css';

function DefaultHeader() {
  const isVisible = useScrollObserver();
  return (
    <Header isVisible={isVisible} className={S.InnerWrapper}>
      <Link href={ROUTES.HOME}>
        <Image src={mainlogo} className={S.Logo} alt="Main Logo" />
      </Link>
    </Header>
  );
}

export default DefaultHeader;
