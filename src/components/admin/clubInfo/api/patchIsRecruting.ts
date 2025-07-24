import { adminClient } from '@/common/apis/ttockTtockClient';

export const patchIsRecruting = async (isRecruiting: boolean) => {
  const data = await adminClient.patch(`/club/recruiting`, {
    isRecruiting,
  });

  return data;
};
