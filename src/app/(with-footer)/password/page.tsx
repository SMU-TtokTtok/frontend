'use client';

import * as S from '@/components/password/index.css';
import Button from '@/common/ui/button';
import Input from '@/common/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { passwordSchema, PasswordFormType } from '@/components/password/schema';

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PasswordFormType>({
    resolver: zodResolver(passwordSchema),
    mode: 'onBlur',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = () => {
    setIsSubmitting(true);
    // TODO: 서버 요청 등 처리
    setTimeout(() => {
      setIsSubmitting(false);
      alert('제출 완료!');
    }, 1000);
  };

  return (
    <div className={S.Wrapper}>
      <form className={S.Container} onSubmit={handleSubmit(onSubmit)}>
        <div className={S.Title}>비밀번호 재설정</div>
        <div className={S.BoxContainer({ gap: 'small' })}>
          <div className={S.BoxTitle}>이메일 인증</div>
          <div className={S.SubContainer}>
            <div className={S.SubDetailContainer}>
              <div className={S.BoxSubTitle}>이메일</div>
              <div className={S.InputButtonFlex}>
                <Input
                  className={S.Input}
                  placeholder="20XXXXXXX@sangmyung.kr"
                  {...register('email')}
                  disabled={isSubmitting}
                />
                <Button variant="secondary" className={S.Button} type="button">
                  인증코드 전송
                </Button>
              </div>
              {errors.email && <span className={S.ErrorMessage}>{errors.email.message}</span>}
            </div>
            <div className={S.SubDetailContainer}>
              <div className={S.BoxSubTitle}>인증코드</div>
              <div className={S.InputButtonFlex}>
                <Input
                  className={S.Input}
                  placeholder="인증코드를 입력하세요"
                  {...register('code')}
                  disabled={isSubmitting}
                />
                <Button variant="secondary" className={S.Button} type="button">
                  인증코드 확인
                </Button>
              </div>
              {errors.code && <span className={S.ErrorMessage}>{errors.code.message}</span>}
            </div>
          </div>
        </div>
        <div className={S.BoxContainer({ gap: 'large' })}>
          <div className={S.BoxTitle}>
            비밀번호 <br className={S.responsiveBr} />
            재설정
          </div>
          <div className={S.SubContainer}>
            <div className={S.SubDetailContainer}>
              <div className={S.BoxSubTitle}>새 비밀번호</div>
              <Input
                className={S.Input}
                placeholder="새 비밀번호 입력를 입력하세요"
                type="password"
                {...register('password')}
                disabled={isSubmitting}
              />
              {errors.password && <span className={S.ErrorMessage}>{errors.password.message}</span>}
            </div>
            <div className={S.SubDetailContainer}>
              <div className={S.BoxSubTitle}>새 비밀번호 재입력</div>
              <Input
                className={S.Input}
                placeholder="새 비밀번호 재입력하세요"
                type="password"
                {...register('passwordConfirm')}
                disabled={isSubmitting}
              />
              {errors.passwordConfirm && (
                <span className={S.ErrorMessage}>{errors.passwordConfirm.message}</span>
              )}
            </div>
          </div>
        </div>
        <Button variant="primary" className={S.SubmitButton} type="submit" disabled={isSubmitting}>
          변경하기
        </Button>
      </form>
    </div>
  );
}
