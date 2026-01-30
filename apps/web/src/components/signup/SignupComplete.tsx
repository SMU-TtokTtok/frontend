'use client';

import { useRouter } from 'next/navigation';
import * as S from '@/components/signup/signupComplete.css';
import { Button } from '@ttockttock/ui';
import { useConfetti } from '@/hooks/useConfetti';
import { ROUTES } from '@/common/constants/routes';

interface SignupCompleteProps {
  userName: string;
}

export default function SignupComplete({ userName }: SignupCompleteProps) {
  const router = useRouter();
  useConfetti();
  return (
    <div className={S.CompleteBox}>
      <div className={S.CompleteTitle}>회원가입 완료!</div>
      <div className={S.CompleteText}>
        <span className={S.CompleteHighlight}>{userName}</span>님, 가입을 환영합니다!
        <br />
        지금 똑똑에서 나에게 맞는 동아리를 찾아보세요
      </div>
      <Button
        variant="primary"
        className={S.CompleteButton}
        onClick={() => router.push(ROUTES.HOME)}
      >
        시작하기
      </Button>
    </div>
  );
}
