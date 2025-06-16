import * as S from './footer.css';
import Image from 'next/image';
import Mainlogo from '@/assets/mainlogo_blue.svg';
import Link from 'next/link';
import { ROUTES } from '@/common/constants/routes';

interface FooterProps {
  serviceName: string;
  informationUrl: string;
}

function Footer({ serviceName, informationUrl }: FooterProps) {
  return (
    <div className={S.container}>
      <div className={S.innerWrapper}>
        <Link href={ROUTES.ADMIN}>
          <Image src={Mainlogo} className={S.logo} alt='메인로고' />
        </Link>
        <p className={S.content}>
          <Link href={informationUrl} target='_blank' rel='noopener noreferrer'>
            개인정보 처리방침
          </Link>
        </p>
        <p className={S.content}>
          Copyright ⓒ {serviceName}. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
