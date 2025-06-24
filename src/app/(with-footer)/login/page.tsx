'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import * as S from './login.css';
import Button from '@/common/ui/button/index';

const loginSchema = z.object({
  email: z.string().email('올바른 이메일 형식을 입력하세요.'),
  password: z.string().min(1, '비밀번호를 입력해주세요.'),
});
type LoginForm = z.infer<typeof loginSchema>;

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

  const onInvalid = () => {
    // 아무 것도 안 해도 됨. errors 객체가 이미 렌더링을 처리함
  };

  return (
    <div className={S.Container}>
      <div className={S.LoginText}>로그인</div>
      <form className={S.BoxContainer} onSubmit={handleSubmit(onValid, onInvalid)}>
        <div className={S.AuthText}>이메일</div>
        <input type="email" className={S.Input} {...register('email')} />
        {errors.email && <p className={S.ErrorText}>{errors.email.message}</p>}

        <div className={S.AuthText} style={{ marginTop: '32px' }}>
          비밀번호
        </div>
        <input type="password" className={S.Input} {...register('password')} />
        {errors.password && <p className={S.ErrorText}>{errors.password.message}</p>}

        <div className={S.AuthFooter}>
          <div className={S.AuthFooterTextContainer}>
            <div className={S.AuthFooterText}>비밀번호 재설정</div>
            <div className={S.AuthFooterText}>|</div>
            <div className={S.AuthFooterText}>회원가입</div>
          </div>
        </div>

        <Button type="submit" variant="secondary" className={S.Button}>
          로그인
        </Button>
      </form>
    </div>
  );
}
