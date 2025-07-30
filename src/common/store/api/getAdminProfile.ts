import { adminClient } from '@/common/apis/ttockTtockClient';
import { AdminProfile } from '@/common/model/adminProfile';

export const getAdminProfile = async () => {
  const data = await adminClient.get<AdminProfile>(`/auth/info`);

  return data;
};
