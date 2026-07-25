'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@/common/ui/button';
import { POLICY } from '@/common/constants/policy';
import {
  googleOnboardingSchema,
  GoogleOnboardingForm,
} from '@/components/login/googleOnboarding/schema';
import * as S from './googleOnboarding.css';

interface GoogleOnboardingProps {
  email: string;
  suggestedName: string;
  isSubmitting: boolean;
  onSubmit: (name: string) => void;
  onCancel: () => void;
}

export default function GoogleOnboarding({
  email,
  suggestedName,
  isSubmitting,
  onSubmit,
  onCancel,
}: GoogleOnboardingProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<GoogleOnboardingForm>({
    resolver: zodResolver(googleOnboardingSchema),
    mode: 'onSubmit',
    // 구글 프로필 이름을 기본값으로 채우고 사용자가 수정할 수 있게 한다.
    defaultValues: { name: suggestedName },
  });

  return (
    <div className={S.Container}>
      <div className={S.Title}>회원가입</div>
      <form
        className={S.BoxContainer}
        onSubmit={handleSubmit(({ name }) => onSubmit(name.trim()))}
      >
        <div className={S.Field}>
          <div className={S.Label}>이메일</div>
          <div className={S.EmailText}>{email}</div>
        </div>

        <div className={S.Field}>
          <label htmlFor="googleOnboardingName" className={S.Label}>
            이름
          </label>
          <input
            id="googleOnboardingName"
            className={S.Input}
            placeholder="본인의 이름을 기재해주세요"
            maxLength={10}
            {...register('name')}
          />
          {errors.name && <p className={S.ErrorText}>{errors.name.message}</p>}
        </div>

        <div className={S.Field}>
          <div className={S.Label}>약관 동의란</div>
          <div className={S.PolicyBox}>{POLICY}</div>
          <label className={S.AgreeLabel}>
            <input type="checkbox" {...register('agree')} />
            <span className={S.AgreeText}>약관 동의란에 대해 동의합니다.</span>
          </label>
          {errors.agree && <p className={S.ErrorText}>{errors.agree.message}</p>}
        </div>

        <div className={S.ButtonGroup}>
          <Button type="submit" variant="primary" className={S.Button} disabled={isSubmitting}>
            {isSubmitting ? '가입 중...' : '가입하고 시작하기'}
          </Button>
          <button type="button" className={S.CancelText} onClick={onCancel}>
            취소하고 로그인으로 돌아가기
          </button>
        </div>
      </form>
    </div>
  );
}
