'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as S from '@/components/login/login.css';
import Button from '@/common/ui/button/index';
import Input from '@/common/ui/input';
import { z } from 'zod';
import { useLoginMutation } from '@/hooks/useAdminMutation';
import { MESSAGE } from '@/common/constants/message';
import Link from 'next/link';
import { ROUTES } from '@/common/constants/routes';

const loginSchema = z.object({
  login: z.string().min(1, MESSAGE.error.adminLogin),
  password: z.string().min(1, MESSAGE.error.adminPassword),
});

export type AdminLoginForm = z.infer<typeof loginSchema>;

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminLoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const { handleLogin } = useLoginMutation();

  return (
    <div className={S.Container}>
      <h3 className={S.LoginText}>동아리 계정 로그인</h3>
      <p className={S.LoginDescription}>
        동아리 모집 및 관리를 위해 <br />
        동아리 계정으로 로그인해 주세요.
      </p>
      <form className={S.BoxContainer} onSubmit={handleSubmit(handleLogin)}>
        <label className={S.AuthText({ password: false })}>아이디</label>

        <Input
          type="text"
          variant="secondary"
          placeholder="아이디를 입력하세요"
          className={S.Input}
          isError={!!errors.login}
          errorMessage={errors.login?.message}
          {...register('login')}
        />

        <label className={S.AuthText({ password: true })}>비밀번호</label>
        <Input
          type="password"
          variant="secondary"
          placeholder="비밀번호를 입력하세요"
          className={S.Input}
          isError={!!errors.password}
          errorMessage={errors.password?.message}
          {...register('password')}
        />
        <Link href={ROUTES.ADMIN_SIGNUP} className={S.AdminSignUp}>
          회원가입
        </Link>
        <Button type="submit" variant="secondary" className={S.adminLoginButton}>
          로그인
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
