'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as S from '@/components/login/login.css';
import Button from '@/common/ui/button/index';
import Input from '@/common/ui/input';
import { z } from 'zod';
import { useLoginMutation } from '@/hooks/useAdminMutation';
import { LOGIN_ERRORS } from '@/common/constants';

const loginSchema = z.object({
  login: z.string().min(1, LOGIN_ERRORS.adminLogin),
  password: z.string().min(1, LOGIN_ERRORS.adminPassword),
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
      <h3 className={S.LoginText}>관리자 로그인</h3>
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

        <Button type="submit" variant="secondary" className={S.adminLoginButton}>
          로그인
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
