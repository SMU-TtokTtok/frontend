import { adminClient } from '@/common/apis/ttockTtockClient';

export const patchIsRecruting = async (clubId: string) => {
  //추후에 id반영
  const data = await adminClient.patch(`/clubs/${clubId}/toggle-recruitment`);

  return data;
};
