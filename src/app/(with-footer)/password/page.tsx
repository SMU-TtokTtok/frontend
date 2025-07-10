'use client';

import * as S from '@/components/password/index.css';
import Button from '@/common/ui/button';
import Input from '@/common/ui/input';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { passwordSchema, PasswordFormType } from '@/components/password/schema';
import { postEmail, postCode, postResetPassword } from '@/components/password/api/postEmail';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<PasswordFormType>({
    resolver: zodResolver(passwordSchema),
    mode: 'onBlur',
  });

  const [isVerified, setIsVerified] = useState(false);

  const handleSendVerificationCode = async () => {
    const email = getValues('email');
    const response = await postEmail({ email });

    if (response.success) {
      alert(response.message);
    } else {
      alert(response.message);
    }
  };

  const handleVerifyCode = async () => {
    const email = getValues('email');
    const code = getValues('code');
    const response = await postCode({ email, code });

    if (response.success) {
      alert(response.message);
      setIsVerified(true); // 인증 성공!
    } else {
      alert(response.message);
      setIsVerified(false);
    }
  };

  const onSubmit = async () => {
    const email = getValues('email');
    const verificationCode = getValues('code');
    const newPassword = getValues('password');
    const newPasswordConfirm = getValues('passwordConfirm');
    const response = await postResetPassword({
      email,
      verificationCode,
      newPassword,
      newPasswordConfirm,
    });
    if (response.success) {
      alert(response.message);
      router.push('/login');
    } else {
      alert(response.message);
    }
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
                />
                <Button
                  variant="secondary"
                  className={S.Button}
                  type="button"
                  onClick={handleSendVerificationCode}
                >
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
                />
                <Button
                  variant="secondary"
                  className={S.Button}
                  type="button"
                  onClick={handleVerifyCode}
                >
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
                placeholder="새 비밀번호를 입력하세요"
                type="password"
                {...register('password')}
                disabled={!isVerified}
              />
              {errors.password && <span className={S.ErrorMessage}>{errors.password.message}</span>}
            </div>
            <div className={S.SubDetailContainer}>
              <div className={S.BoxSubTitle}>새 비밀번호 재입력</div>
              <Input
                className={S.Input}
                placeholder="새 비밀번호를 재입력하세요"
                type="password"
                {...register('passwordConfirm')}
                disabled={!isVerified}
              />
              {errors.passwordConfirm && (
                <span className={S.ErrorMessage}>{errors.passwordConfirm.message}</span>
              )}
            </div>
          </div>
        </div>
        <Button variant="primary" className={S.SubmitButton} type="submit" disabled={!isVerified}>
          변경하기
        </Button>
      </form>
    </div>
  );
}
