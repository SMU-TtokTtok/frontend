'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import * as S from '../../../components/login/login.css';
import Button from '@/common/ui/button/index';
import { loginSchema, LoginForm } from '@/components/login/schema';
import { ROUTES } from '@/common/constants/routes';
import { postLogin } from '@/components/login/api';

export default function Page() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    // setError,
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    mode: 'onSubmit',
  });

  const onSubmit = async (data: LoginForm) => {
    // 학번을 이메일로 변환
    const loginData = {
      email: `${data.studentId}@sangmyung.kr`,
      password: data.password,
      rememberMe: data.rememberMe,
    };
    const response = await postLogin(loginData);

    if (response.success) {
      router.push('/');
    } else {
      alert(response.message);
    }
  };

  return (
    <div className={S.Container}>
      <div className={S.LoginText}>로그인</div>
      <form className={S.BoxContainer} onSubmit={handleSubmit(onSubmit)}>
        <div className={S.AuthText({ password: false })}>학번</div>
        <input
          type="text"
          className={S.userInput}
          {...register('studentId')}
          placeholder="학번을 입력하세요"
          maxLength={9}
        />
        {errors.studentId && <p className={S.ErrorText}>{errors.studentId.message}</p>}

        <div className={S.AuthText({ password: true })}>비밀번호</div>
        <input
          type="password"
          className={S.userInput}
          {...register('password')}
          placeholder="비밀번호를 입력하세요"
        />
        {errors.password && <p className={S.ErrorText}>{errors.password.message}</p>}

        <div className={S.AuthFooter}>
          <div className={S.CheckboxContainer}>
            <input type="checkbox" {...register('rememberMe')} />
            <div className={S.CheckboxText}>로그인 상태 유지</div>
          </div>
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
