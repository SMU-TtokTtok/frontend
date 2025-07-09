'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as S from '../../../components/signup/signup.css';
import Button from '@/common/ui/button';
import { POLICY } from '@/common/constants/policy';
import { signupSchema, SignupForm } from '@/components/signup/schema';
import SignupComplete from '@/components/signup/SignupComplete';
import { postEmail } from '@/components/signup/api';

export default function Page() {
  const [isComplete, setIsComplete] = useState(false);
  const [userName, setUserName] = useState('');

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
    mode: 'onBlur',
  });

  const handleSendEmail = async () => {
    const email = getValues('email');

    const response = await postEmail({ email });
    if (response.success) {
      alert(response.message);
    } else {
      alert(response.message);
    }
  };

  const onSubmit = async (data: SignupForm) => {
    const response = await userSignupHandler(data);
    if (response.success) {
      setUserName(data.name);
      setIsComplete(true);
    } else {
      alert(response.message);
    }
  };

  if (isComplete) {
    return <SignupComplete userName={userName} />;
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
                <input
                  className={S.Input}
                  {...register('email')}
                  placeholder="20XXXXXXX@sangmyung.kr"
                />
                <Button
                  variant="secondary"
                  className={S.Button}
                  type="button"
                  onClick={handleSendEmail}
                >
                  인증코드 전송
                </Button>
              </div>
              {errors.email && <p className={S.ErrorText}>{errors.email.message}</p>}
            </div>
            <div className={S.FlexBox}>
              <div className={S.LabelDetailText}>인증코드</div>
              <div className={S.FlexBox2}>
                <input
                  className={S.Input}
                  {...register('code')}
                  placeholder="인증코드를 입력하세요"
                />
                <Button
                  variant="secondary"
                  className={S.Button}
                  type="button"
                  onClick={() => alert('인증코드를 전송했습니다.')}
                >
                  인증코드 확인
                </Button>
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
                <input
                  className={S.Input}
                  type="password"
                  {...register('password')}
                  placeholder="비밀번호를 입력하세요"
                />
              </div>
              {errors.password && <p className={S.ErrorText}>{errors.password.message}</p>}
            </div>
            <div className={S.FlexBox}>
              <div className={S.LabelDetailText}>비밀번호 재입력</div>
              <div className={S.FlexBox2}>
                <input
                  className={S.Input}
                  type="password"
                  {...register('confirmPassword')}
                  placeholder="비밀번호를 재입력하세요"
                />
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
