import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postLogin } from '@/components/admin/login/api/login';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/common/constants/routes';
import { AdminLoginForm } from '@/components/admin/login';
import { postLogout } from '@/common/components/header/api/logout';
import { adminProfileKey } from './queries/key';

export const useLoginMutation = () => {
  const router = useRouter();

  const loginMutation = useMutation({
    mutationFn: async ({ login, password }: AdminLoginForm) => {
      const response = await postLogin({ login, password });
      return response;
    },
    onSuccess: () => {
      router.push(ROUTES.ADMIN_APPLICATIONS);
    },
  });

  const handleLogin = (data: AdminLoginForm) => {
    loginMutation.mutate(data);
  };

  return {
    handleLogin,
  };
};

export const useLogoutMutation = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  const { adminProfile } = adminProfileKey;

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await postLogout();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: adminProfile });
      router.push(ROUTES.ADMIN_LOGIN);
    },
    onError: (error) => {
      alert('로그아웃 중 오류가 발생했습니다.');
      console.error('Logout error:', error);
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return {
    handleLogout,
  };
};
