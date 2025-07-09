'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import * as S from '../../../components/login/login.css';
import Button from '@/common/ui/button/index';
import { loginSchema, LoginForm } from '@/components/login/schema';
import { ROUTES } from '@/common/constants/routes';

export default function Page() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });

  const onValid = async (data: LoginForm) => {
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!res.ok) {
        const result = await res.json();

        if (result.error === 'invalid_password') {
          setError('password', {
            type: 'server',
            message:
              '이메일 또는 비밀번호가 잘못 되었습니다. 아이디와 비밀번호를 정확히 입력해 주세요.',
          });
        }

        return;
      }

      router.push('/');
    } catch (err) {
      console.error(err);
      setError('password', {
        type: 'server',
        message: '서버 오류가 발생했습니다.',
      });
    }
  };

  return (
    <div className={S.Container}>
      <div className={S.LoginText}>로그인</div>
      <form className={S.BoxContainer} onSubmit={handleSubmit(onValid)}>
        <div className={S.AuthText({ password: false })}>이메일</div>
        <input
          type="email"
          className={S.userInput}
          {...register('email')}
          placeholder="20XXXXXXX@sangmyung.kr"
        />
        {errors.email && <p className={S.ErrorText}>{errors.email.message}</p>}

        <div className={S.AuthText({ password: true })}>비밀번호</div>
        <input
          type="password"
          className={S.userInput}
          {...register('password')}
          placeholder="비밀번호를 입력하세요"
        />
        {errors.password && <p className={S.ErrorText}>{errors.password.message}</p>}

        <div className={S.AuthFooter}>
          <div className={S.AuthFooterTextContainer}>
            <div className={S.AuthFooterText} onClick={() => router.push(ROUTES.PASSWORD)}>
              비밀번호 재설정
            </div>
            <div className={S.AuthFooterText}>|</div>
            <div className={S.AuthFooterText} onClick={() => router.push(ROUTES.SIGNUP)}>
              회원가입
            </div>
          </div>
        </div>

        <Button type="submit" variant="secondary" className={S.Button}>
          로그인
        </Button>
      </form>
    </div>
  );
}
