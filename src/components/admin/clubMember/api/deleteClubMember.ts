import { adminClient } from '@/common/apis/ttockTtockClient';

export const deleteClubMember = async (memberId: string) => {
  //추후에 로그인해서 clubId 스토리지에 있는거 가져와서 수정할예정 by 현우
  const clubId = 1;
  const data = await adminClient.delete(`/members/${clubId}/${memberId}`);

  return data;
};
