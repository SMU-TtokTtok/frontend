'use client';

import * as S from '@/components/password/index.css';
import Button from '@/common/ui/button';
import Input from '@/common/ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const schema = z
  .object({
    email: z
      .string()
      .email('올바른 이메일 형식이 아닙니다.')
      .regex(/^[0-9]{2}\d{7}@sangmyung\.kr$/, '학교 이메일 형식이 아닙니다.'),
    code: z.string().min(6, '인증코드는 6자리여야 합니다.').max(6, '인증코드는 6자리여야 합니다.'),
    password: z
      .string()
      .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
      .regex(/[!@#$%^&*(),.?":{}|<>]/, '특수문자를 포함해야 합니다.'),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordConfirm'],
  });

type FormType = z.infer<typeof schema>;

export default function Page() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(schema),
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
              {errors.email && (
                <span style={{ color: 'red', fontSize: '12px' }}>{errors.email.message}</span>
              )}
            </div>
            <div className={S.SubDetailContainer}>
              <div className={S.BoxSubTitle}>인증코드</div>
              <div className={S.InputButtonFlex}>
                <Input
                  className={S.Input}
                  placeholder="000000"
                  {...register('code')}
                  disabled={isSubmitting}
                />
                <Button variant="secondary" className={S.Button} type="button">
                  인증코드 확인
                </Button>
              </div>
              {errors.code && (
                <span style={{ color: 'red', fontSize: '12px' }}>{errors.code.message}</span>
              )}
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
              <div className={S.BoxSubTitle}>비밀번호</div>
              <Input
                className={S.Input}
                placeholder="abcdefg."
                type="password"
                {...register('password')}
                disabled={isSubmitting}
              />
              {errors.password && (
                <span style={{ color: 'red', fontSize: '12px' }}>{errors.password.message}</span>
              )}
            </div>
            <div className={S.SubDetailContainer}>
              <div className={S.BoxSubTitle}>비밀번호 재입력</div>
              <Input
                className={S.Input}
                placeholder="abcdefg."
                type="password"
                {...register('passwordConfirm')}
                disabled={isSubmitting}
              />
              {errors.passwordConfirm && (
                <span style={{ color: 'red', fontSize: '12px' }}>
                  {errors.passwordConfirm.message}
                </span>
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
