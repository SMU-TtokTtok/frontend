import DefaultHeader from '@/common/components/header/defaultHeader';
import Footer from '@/common/ui/footer';
import { FOOTER } from '@/common/constants';
import * as S from '@/components/404/index.css';
import Image from 'next/image';
import notFound from '@/assets/404.svg';

export default function NotFound() {
  return (
    <>
      <DefaultHeader />
      <div className={S.wrapper}>
        <div className={S.container}>
          <Image src={notFound} alt="404" className={S.notFoundImage} />
          <div className={S.stringTextContainer}>
            <div className={S.stringText}>문제가 발생했습니다!</div>
            <div className={S.stringText2}>페이지를 찾을 수 없습니다</div>
          </div>
        </div>
      </div>
      <Footer serviceName={FOOTER.serviceName} informationUrl={FOOTER.informationUrl} />
    </>
  );
}
