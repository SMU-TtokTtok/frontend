import * as S from './footer.css';
import Image from 'next/image';
import Mainlogo from '@/assets/mainlogo_blue.svg';
import Link from 'next/link';
import { ROUTES } from '@/common/constants/routes';

interface FooterProps {
  serviceName: string;
  informationUrl: string;
  feedbackUrl: string;
}

function Footer({ serviceName, informationUrl, feedbackUrl }: FooterProps) {
  return (
    <div className={S.container}>
      <div className={S.innerWrapper}>
        <Link href={ROUTES.ADMIN_LOGIN}>
          <Image src={Mainlogo} className={S.logo} alt="메인로고" />
        </Link>
        <div className={S.rowsort}>
          <p className={S.content}>
            <Link href={informationUrl} target="_blank" rel="noopener noreferrer">
              개인정보 처리방침
            </Link>
          </p>
          <p className={S.content}>
            <a href={feedbackUrl} target="_blank" rel="noopener noreferrer">
              피드백 하러가기
            </a>
          </p>
        </div>
        <p className={S.content}>Copyright ⓒ {serviceName}. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
