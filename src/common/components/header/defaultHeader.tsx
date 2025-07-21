'use client';
import Link from 'next/link';
import Header from '../../ui/header';
import { ROUTES } from '@/common/constants/routes';
import mainlogo from '@/assets/mainlogo_wh.svg';
import Image from 'next/image';
import { useScrollObserver } from '@/hooks/useScrollObserver';
import * as S from './defaultHeader.css';
import Button from '@/common/ui/button';

function DefaultHeader() {
  const isVisible = useScrollObserver();
  return (
    <Header isVisible={isVisible} className={S.InnerWrapper}>
      <Link href={ROUTES.HOME}>
        <Image src={mainlogo} className={S.Logo} alt="Main Logo" />
      </Link>
      <div>
        <Link href={ROUTES.LOGIN}>
          <Button className={S.ButtonStyle} variant="secondary">
            로그인
          </Button>
        </Link>
        <Link href={ROUTES.SIGNUP}>
          <Button className={S.ButtonStyle} variant="secondary">
            회원가입
          </Button>
        </Link>
      </div>
    </Header>
  );
}

export default DefaultHeader;
