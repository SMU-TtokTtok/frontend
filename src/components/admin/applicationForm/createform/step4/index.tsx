import Indicator from '../indicator';
import Button from '@/common/ui/button';
import * as S from './step4.css';
import { ROUTES } from '@/common/constants/routes';
import Link from 'next/link';

function SuccessStep() {
  return (
    <div className={S.step4Container}>
      <div className={S.innerWrapper}>
        <Indicator step={4} />
        <div className={S.content}>
          <h3 className={S.title}>
            제작한 지원폼이
            <br /> 업로드 되었습니다.
          </h3>
          <Link href={ROUTES.ADMIN_APPLICATIONS_FORM}>
            <Button variant="primary" className={S.button}>
              지원폼 보러가기
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SuccessStep;
