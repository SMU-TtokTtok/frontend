'use client';
import { useMutation } from '@tanstack/react-query';
import { postAdminPassword, AdminPasswordForm } from '@/components/admin/password/api/password';
import { CustomHttpError } from '@/common/apis/apiClient';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/common/constants/routes';

export const useAdminPasswordMutation = () => {
  const router = useRouter();

  const passwordMutation = useMutation({
    mutationFn:  (passwordData: AdminPasswordForm) => postAdminPassword(passwordData),
    onSuccess: () => {
      alert('비밀번호 재설정이 완료되었습니다');
      router.push(ROUTES.ADMIN_LOGIN);
    },
    onError: (error) => {
      const customError = error as CustomHttpError;
      if (customError.status !== 401) {
        alert('비밀번호 재설정 중 오류가 발생했습니다.');
      }
    }
  });

  const handlePassword = (data: AdminPasswordForm) => {
    passwordMutation.mutate(data);
  };

  return {
    handlePassword,
    passwordMutation,
  };
};
