import { adminClient } from '@/common/apis/ttockTtockClient';

export const patchClubMember = async (memberId: string, role: string, clubId: string) => {
  console.log(role);
  const data = await adminClient.patch(`/members/${clubId}/${memberId}/role`, {
    role,
  });

  return data;
};
