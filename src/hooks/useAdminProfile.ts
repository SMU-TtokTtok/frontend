import { AdminProfile } from '@/common/model/adminProfile';
import { getAdminProfile } from '@/common/store/api/getAdminProfile';
import { useQuery } from '@tanstack/react-query';
import { adminProfileKey } from './queries/key';

export function useAdminProfile() {
  const { adminProfile } = adminProfileKey;
  const { data, isLoading } = useQuery<AdminProfile>({
    queryKey: [adminProfile],
    queryFn: () => getAdminProfile(),
  });

  return { data, isLoading };
}
