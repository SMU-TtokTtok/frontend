import { useMutation } from '@tanstack/react-query';
import { postLogout } from '@/components/login/api';
import { CustomHttpError } from '@/common/apis/apiClient';
import { clearFCMToken } from '@/fcm/fcmToken';

export const useLogoutMutation = () => {
  const logoutMutation = useMutation({
    mutationFn: async () => {
      await clearFCMToken();
      await postLogout();
    },
    onSuccess: async () => {
      localStorage.removeItem('name');
      localStorage.removeItem('user_access_token');
      localStorage.removeItem('user_refresh_token');

      window.location.href = '/login';
    },
    onError: (error) => {
      const customError = error as CustomHttpError;
      if (customError.status !== 401) {
        alert('로그아웃 중 오류가 발생했습니다.');
      }
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return {
    handleLogout,
  };
};
