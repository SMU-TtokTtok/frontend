import { adminClient } from '@/common/apis/ttockTtockClient';

export const patchIsRecruting = async (isRecruiting: boolean) => {
  const clubId = 1;
  //추후에 id반영
  const data = await adminClient.patch(`/clubs/${clubId}/toggle-recruiting`, {
    isRecruiting,
  });

  return data;
};
