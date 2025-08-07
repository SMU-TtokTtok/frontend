import { useMutation } from '@tanstack/react-query';
import { postLogout } from '@/components/login/api';

export const useLogoutMutation = () => {
  const logoutMutation = useMutation({
    mutationFn: async () => {
      await postLogout();
    },
    onSuccess: () => {},
    onError: () => {
      alert('로그아웃 중 오류가 발생했습니다.');
    },
  });

  const handleLogout = () => {
    logoutMutation.mutate();
  };

  return {
    handleLogout,
  };
};
