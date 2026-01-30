'use client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import * as S from './complete.css';
import Button from '@/common/ui/button';
import { ROUTES } from '@/common/constants/routes';
import { useConfetti } from '@/hooks/useConfetti';

function SignupCompletePage() {
  const router = useRouter();
  useConfetti();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={S.Container}>
      <div className={S.ContentBox}>
        <div className={S.IconWrapper}>✓</div>

        <h1 className={S.Title}>회원가입이 완료되었습니다!</h1>

        <p className={S.Description}>
          동아리 계정이 성공적으로 생성되었습니다.
          <br />
          이제 로그인하여 동아리를 관리할 수 있습니다.
        </p>

        <div className={S.InfoBox}>
          <p className={S.InfoText}>
            💡 <strong>다음 단계</strong>
            <br />
            <br />
            1. 로그인 후 동아리 정보를 등록해주세요
            <br />
            2. 지원서 양식을 생성하여 모집을 시작하세요
            <br />
            3. 지원자 관리 페이지에서 지원자를 확인하세요
          </p>
        </div>

        <div className={S.ButtonGroup}>
          <Button
            variant="primary"
            className={S.PrimaryButton}
            onClick={() => router.push(ROUTES.ADMIN_LOGIN)}
          >
            로그인하러 가기
          </Button>

          <Link href={ROUTES.HOME}>
            <Button variant="secondary" className={S.SecondaryButton}>
              홈으로 돌아가기
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default SignupCompletePage;
