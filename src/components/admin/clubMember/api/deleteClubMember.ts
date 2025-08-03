import { adminClient } from '@/common/apis/ttockTtockClient';

export const deleteClubMember = async (memberId: string, clubId: string) => {
  const data = await adminClient.delete(`/members/${clubId}/${memberId}`);

  return data;
};
