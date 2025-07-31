import { adminClient } from '@/common/apis/ttockTtockClient';

export const patchClubInfo = async (body: any) => {
  const clubId = 1;
  //추후에 id반영
  const data = await adminClient.patch(`/clubs/${clubId}/content`, body);

  return data;
};
