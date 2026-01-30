'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as S from './signup.css';
import Button from '@/common/ui/button/index';
import Input from '@/common/ui/input';
import { z } from 'zod';
import { useAdminSignupMutation } from '@/hooks/useAdminSignupMutation';
import Link from 'next/link';
import { ROUTES } from '@/common/constants/routes';
import { signupSchema } from './schema';
import { FILTER_CONFIG } from '@/common/constants';
import { useState } from 'react';
import SignupCompletePage from './complete/page';

export type AdminSignupForm = z.infer<typeof signupSchema>;

function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminSignupForm>({
    resolver: zodResolver(signupSchema),
  });
  const [isComplete, setIsComplete] = useState(false);
  const { handleSignup, signupMutation } = useAdminSignupMutation();

  if (isComplete) {
    return <SignupCompletePage />;
  }

  return (
    <div className={S.Container}>
      <h3 className={S.SignupText}>동아리 운영진 회원가입</h3>
      <p className={S.SignupDescription}>
        동아리 모집 및 관리를 위해 <br />
        운영진 계정을 생성해 주세요.
      </p>
      <form
        className={S.BoxContainer}
        onSubmit={handleSubmit((data) => {
          handleSignup(data);
          setIsComplete(true);
        })}
      >
        <label className={S.Label({ isFirst: true })}>아이디</label>
        <Input
          type="text"
          variant="secondary"
          placeholder="아이디를 입력하세요 (8자 이상)"
          className={S.Input}
          isError={!!errors.username}
          errorMessage={errors.username?.message}
          {...register('username')}
        />

        <label className={S.Label({ isFirst: false })}>비밀번호</label>
        <Input
          type="password"
          variant="secondary"
          placeholder="비밀번호를 입력하세요 (12자 이상)"
          className={S.Input}
          isError={!!errors.password}
          errorMessage={errors.password?.message}
          {...register('password')}
        />

        <label className={S.Label({ isFirst: false })}>동아리 이름</label>
        <Input
          type="text"
          variant="secondary"
          placeholder="동아리 이름을 입력하세요"
          className={S.Input}
          isError={!!errors.clubName}
          errorMessage={errors.clubName?.message}
          {...register('clubName')}
        />

        <label className={S.Label({ isFirst: false })}>단과대</label>
        <select
          className={`${S.Select} ${errors.clubUniv ? S.SelectError : ''}`}
          {...register('clubUniv')}
        >
          <option value="">단과대를 선택하세요</option>
          {FILTER_CONFIG.clubUniv.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.clubUniv && <p className={S.ErrorText}>{errors.clubUniv.message}</p>}

        <div className={S.LinkContainer}>
          <Link href={ROUTES.ADMIN_LOGIN} className={S.LoginLink}>
            이미 계정이 있으신가요? 로그인
          </Link>
        </div>

        <Button
          type="submit"
          variant="secondary"
          className={S.SignupButton}
          disabled={signupMutation.isPending}
        >
          회원가입
        </Button>
      </form>
    </div>
  );
}

export default SignupPage;
