import Link from 'next/link';
import Image from 'next/image';
import * as S from './clientHeader.css';
import arrowNav from '@/assets/arrow_nav.svg';
import person from '@/assets/person.svg';
import { ROUTES } from '@/common/constants/routes';
import { useOutsideClick } from '@/hooks/useOutsideClick';
interface MobileSideMenuProps {
  setIsSideMenuOpen: (isOpen: boolean) => void;
}

function MobileSideMenu({ setIsSideMenuOpen }: MobileSideMenuProps) {
  const handleClose = () => {
    setIsSideMenuOpen(false);
  };
  const ref = useOutsideClick<HTMLDivElement>(() => handleClose());
  return (
    <>
      <div className={S.MobileBackdrop} />
      <div className={S.SideMenu} ref={ref}>
        {/*로그인 로직 나오면 분기 처리 할게요 by 형준*/}

        <label className={S.label}>내 정보</label>
        <div className={S.myInfo}>
          <Image src={person} alt="내 정보" />
          <p className={S.name}>
            <strong>로그인</strong>이 필요해요
          </p>
        </div>
        <Link href={ROUTES.LOGIN} className={S.MenuItem}>
          <span>로그인</span>
          <Image src={arrowNav} alt="이동하기" />
        </Link>
        <Link href={ROUTES.SIGNUP} className={S.MenuItem}>
          <span>회원가입</span>
          <Image src={arrowNav} alt="이동하기" />
        </Link>
      </div>
    </>
  );
}

export default MobileSideMenu;
