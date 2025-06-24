'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import * as S from './signup.css';
import Button from '@/common/ui/button';
import { POLICY } from '@/common/constants/policy';

const schema = z
  .object({
    email: z.string().email('올바른 이메일 형식을 입력해주세요.'),
    code: z.string().min(1, '인증코드를 입력해주세요.'),
    password: z.string().min(1, '비밀번호를 입력해주세요.'),
    confirmPassword: z.string().min(1, '비밀번호 재입력을 해주세요.'),
    name: z.string().min(1, '이름을 입력해주세요.'),
    agree: z.literal(true, {
      errorMap: () => ({ message: '약관에 동의하셔야 합니다.' }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

type FormData = z.infer<typeof schema>;

export default function Page() {
  const [isComplete, setIsComplete] = useState(false);
  const [userName, setUserName] = useState('');
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    setUserName(data.name);
    setIsComplete(true);
  };

  if (isComplete) {
    return (
      <div className={S.Container}>
        <div className={S.CompleteBox}>
          <div className={S.CompleteTitle}>회원가입 완료!</div>
          <div className={S.CompleteText}>
            <span className={S.CompleteHighlight}>{userName}</span>님, 가입을 환영합니다!
            <br />
            지금 똑똑에서 나에게 맞는 동아리를 찾아보세요
          </div>
          <Button variant="primary" className={S.CompleteButton} onClick={() => router.push('/')}>
            시작하기
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className={S.Container}>
      <form className={S.BoxContainer} onSubmit={handleSubmit(onSubmit)}>
        <div className={S.TitleText}>회원가입</div>

        {/* 이메일 인증 */}
        <div className={S.LabelBoxContainer} style={{ gap: '112px' }}>
          <div className={S.LabelText}>이메일 인증</div>
          <div className={S.LabelDetailBox}>
            <div className={S.FlexBox}>
              <div className={S.LabelDetailText}>이메일</div>
              <div className={S.FlexBox2}>
                <input className={S.Input} {...register('email')} />
                <Button
                  variant="secondary"
                  className={S.Button}
                  type="button"
                  onClick={() => alert('인증코드를 전송했습니다.')}
                >
                  인증코드 전송
                </Button>
              </div>
              {errors.email && <p className={S.ErrorText}>{errors.email.message}</p>}
            </div>
            <div className={S.FlexBox}>
              <div className={S.LabelDetailText}>인증코드</div>
              <div className={S.FlexBox2}>
                <input className={S.Input} {...register('code')} />
              </div>
              {errors.code && <p className={S.ErrorText}>{errors.code.message}</p>}
            </div>
          </div>
        </div>

        {/* 비밀번호 */}
        <div className={S.LabelBoxContainer} style={{ gap: '134px' }}>
          <div className={S.LabelText}>비밀번호</div>
          <div className={S.LabelDetailBox}>
            <div className={S.FlexBox}>
              <div className={S.LabelDetailText}>비밀번호</div>
              <div className={S.FlexBox2}>
                <input className={S.Input} type="password" {...register('password')} />
              </div>
              {errors.password && <p className={S.ErrorText}>{errors.password.message}</p>}
            </div>
            <div className={S.FlexBox}>
              <div className={S.LabelDetailText}>비밀번호 재입력</div>
              <div className={S.FlexBox2}>
                <input className={S.Input} type="password" {...register('confirmPassword')} />
              </div>
              {errors.confirmPassword && (
                <p className={S.ErrorText}>{errors.confirmPassword.message}</p>
              )}
            </div>
          </div>
        </div>

        {/* 이름 */}
        <div className={S.LabelBoxContainer} style={{ gap: '166px' }}>
          <div className={S.LabelText}>이름</div>
          <div className={S.FlexBox}>
            <div className={S.FlexBox2}>
              <input
                className={S.Input}
                placeholder="본인의 이름을 기재해주세요"
                {...register('name')}
              />
            </div>
            {errors.name && <p className={S.ErrorText}>{errors.name.message}</p>}
          </div>
        </div>

        {/* 약관 */}
        <div className={S.LabelBoxContainer} style={{ gap: '112px' }}>
          <div className={S.LabelText}>약관 동의란</div>
          <div className={S.FlexPolicy}>
            <div className={S.PolicyBox}>{POLICY}</div>
            <div className={S.FlexAgree}>
              <input type="checkbox" {...register('agree')} />
              <div className={S.AgreeText}>약관 동의란에 대해 동의합니다.</div>
            </div>
            {errors.agree && <p className={S.ErrorText}>{errors.agree.message}</p>}
          </div>
        </div>

        <Button variant="primary" className={S.SignupButton} type="submit">
          가입하기
        </Button>
      </form>
    </div>
  );
}
