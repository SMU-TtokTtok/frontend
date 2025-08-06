import React, { startTransition, useEffect } from 'react';
import * as S from './error.css';
import Image from 'next/image';
import errorIcon from '@/assets/error.svg';
import { useRouter } from 'next/navigation';
import Button from '@/common/ui/button';
interface ErrorPageProps {
  error?: Error;
  reset?: () => void;
  className?: string;
}
function UnExpectedErrorPage({ error, reset, className }: ErrorPageProps) {
  const router = useRouter();

  useEffect(() => {
    if (error) {
      console.error('Error발생', error);
      //배포후 에러 로깅을 연동할게요 by 형준
    }
  }, [error]);

  const handleReload = () => {
    startTransition(() => {
      router.refresh();
      reset?.();
    });
  };
  const containerClass = `${className ? className : S.container}`;

  return (
    <div className={containerClass}>
      <Image src={errorIcon} alt="에러 아이콘" className={S.icon} />
      <div className={S.title}>문제가 발생했습니다</div>
      <div className={S.message}>
        예상치 못한 오류가 발생했습니다.
        <br />
        잠시 후 다시 시도해 주세요.
      </div>
      <Button variant="primary" className={S.button} onClick={handleReload}>
        새로고침
      </Button>
    </div>
  );
}

export default UnExpectedErrorPage;
