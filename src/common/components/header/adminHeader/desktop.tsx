import { ROUTES } from '@/common/constants/routes';
import Header from '@/common/ui/header';
import mainlogo from '@/assets/mainlogo_wh.svg';
import Image from 'next/image';
import Link from 'next/link';
import * as S from './adminHeader.css';
import { AdminProfile } from '@/common/model/adminProfile';
interface DesktopProps {
  isVisible: boolean;
  handleLogoutClick: () => void;
  profile: AdminProfile | null;
}

function Desktop({ isVisible, handleLogoutClick, profile }: DesktopProps) {
  return (
    <Header isVisible={isVisible} className={S.DesktopInnerWrapper}>
      <Link href={ROUTES.ADMIN}>
        <Image src={mainlogo} className={S.Logo} alt="Main Logo" />
      </Link>
      <p className={S.AdminMessage}>관리자 모드로 접속하셨습니다.</p>

      <div className={S.RightSideContainer}>
        <p className={S.RightSideText} onClick={handleLogoutClick}>
          로그아웃
        </p>
        <div className={S.RightArea}>
          <span className={S.RightAreaIcon}></span>
          <p className={S.RightAreaText}>{profile?.clubName ?? '동아리명'}</p>
        </div>
      </div>
    </Header>
  );
}

export default Desktop;
