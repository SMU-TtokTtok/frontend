import { adminClient } from '@/common/apis/ttockTtockClient';

export const patchIsRecruting = async () => {
  const clubId = 1;
  //추후에 id반영
  const data = await adminClient.patch(`/clubs/${clubId}/toggle-recruitment`, undefined);

  return data;
};
