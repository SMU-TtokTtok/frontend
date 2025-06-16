import * as footer from './footer.css';
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
    <div className={footer.container}>
      <div className={footer.innerWrapper}>
        <Link href={ROUTES.ADMIN}>
          <Image src={Mainlogo} className={footer.logo} alt='메인로고' />
        </Link>
        <p className={footer.content}>
          <Link href={informationUrl}>개인정보 처리방침</Link>
        </p>
        <p className={footer.content}>
          Copyright ⓒ {serviceName}. All Rights Reserved
        </p>
      </div>
    </div>
  );
}

export default Footer;
