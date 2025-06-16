import React from 'react';
import Button from '@/common/ui/button';
import * as S from './header.css';
import Link from 'next/link';
import { ROUTES } from '@/common/constants/routes';

function NavRightSide() {
  return (
    <div>
      <Link href={ROUTES.LOGIN}>
        <Button className={S.ButtonStyle} variant='secondary'>
          로그인
        </Button>
      </Link>
      <Link href={ROUTES.SIGNUP}>
        <Button className={S.ButtonStyle} variant='secondary'>
          회원가입
        </Button>
      </Link>
    </div>
  );
}

export default NavRightSide;
