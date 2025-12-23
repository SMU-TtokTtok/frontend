import Button from '@/common/ui/button';
import * as S from './applicationForm.css';
import Link from 'next/link';
import { ROUTES } from '@/common/constants/routes';
function EmptyPage() {
  return (
    <div className={S.emptyContainer}>
      <h3 className={S.title}>📋 지원폼관리</h3>
      <div className={S.emptyWrapper}>
        <div className={S.emptyDescription}>아직 제작한 지원폼이 없습니다.</div>
        <Link href={ROUTES.ADMIN_APPLICATIONS_CREATE}>
          <Button variant="primary" className={S.makeFormButton}>
            지원폼 제작하기
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default EmptyPage;
