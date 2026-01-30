'use client';
import { useMutation } from '@tanstack/react-query';
import { postAdminSignup, AdminSignupForm } from '@/components/admin/signup/api/signup';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/common/constants/routes';
import { CustomHttpError } from '@/common/apis/apiClient';

export const useAdminSignupMutation = () => {
  const router = useRouter();

  const signupMutation = useMutation({
    mutationFn: async (signupData: AdminSignupForm) => {
      const response = await postAdminSignup(signupData);
      return response;
    },
    onError: (error) => {
      const customError = error as CustomHttpError;
      if (customError.status !== 401) {
        alert('회원가입 중 오류가 발생했습니다.');
      }
    },
  });

  const handleSignup = (data: AdminSignupForm) => {
    signupMutation.mutate(data);
  };

  return {
    signupMutation,
    handleSignup,
  };
};
