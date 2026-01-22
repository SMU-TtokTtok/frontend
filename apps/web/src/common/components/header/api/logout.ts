import { adminClient } from '@/common/apis/ttockTtockClient';

export const postLogout = async () => {
  const data = await adminClient.post(`/auth/logout`, {});

  return data;
};
