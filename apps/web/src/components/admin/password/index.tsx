'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as S from '../signup/signup.css'
import Button from '@/common/ui/button/index';
import Input from '@/common/ui/input';
import { z } from 'zod';
import { passwordSchema } from './schema';
import { useAdminPasswordMutation } from '@/hooks/useAdminPassword';

export type AdminPasswordForm = z.infer<typeof passwordSchema>;

function PasswordPage() {
  const { handlePassword, passwordMutation } = useAdminPasswordMutation();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AdminPasswordForm>({
    resolver: zodResolver(passwordSchema),
  });

  const onSubmit = (data: AdminPasswordForm) => {
    handlePassword(data);
  };

  return (
    <div className={S.Container}>
      <h3 className={S.SignupText}>동아리 비밀번호 재설정</h3>
      <form className={S.BoxContainer} onSubmit={handleSubmit(onSubmit)}>
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
        <label className={S.Label({ isFirst: false })}>새 비밀번호</label>
        <Input
          type="password"
          variant="secondary"
          placeholder="새 비밀번호를 입력하세요 (12자 이상)"
          className={S.Input}
          isError={!!errors.newPassword}
          errorMessage={errors.newPassword?.message}
          {...register('newPassword')}
        />
        <label className={S.Label({ isFirst: false })}>새 비밀번호 확인</label>
        <Input
          type="password"
          variant="secondary"
          placeholder="새 비밀번호를 재입력하세요 (12자 이상)"
          className={S.Input}
          isError={!!errors.newPasswordConfirm}
          errorMessage={errors.newPasswordConfirm?.message}
          {...register('newPasswordConfirm')}
        />

        <Button
          type="submit"
          variant="secondary"
          className={S.SignupButton}
          disabled={passwordMutation.isPending}
        >
          비밀번호 재설정
        </Button>
      </form>
    </div>
  );
}

export default PasswordPage;
