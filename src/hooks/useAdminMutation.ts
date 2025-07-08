import { useMutation } from '@tanstack/react-query';
import { postLogin } from '@/components/admin/login/api/login';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/common/constants/routes';
import { AdminLoginForm } from '@/components/admin/login';
import { useAuthStore } from '@/common/store/authAdmin';

export const useLoginMutation = () => {
  const router = useRouter();
  const { setLogin } = useAuthStore();

  const loginMutation = useMutation({
    mutationFn: async ({ login, password }: AdminLoginForm) => {
      const response = await postLogin({ login, password });
      return response;
    },
    onSuccess: (data) => {
      const { accessToken } = data;

      if (accessToken) {
        sessionStorage.setItem('admin_access_token', accessToken);
      }
      setLogin(accessToken);
      router.push(ROUTES.ADMIN);
    },
  });

  const handleLogin = (data: AdminLoginForm) => {
    loginMutation.mutate(data);
  };

  return {
    handleLogin,
  };
};
