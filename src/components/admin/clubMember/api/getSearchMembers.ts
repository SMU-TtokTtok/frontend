import { adminClient } from '@/common/apis/ttockTtockClient';

export interface ClubMember {
  clubMembers: {
    grade: string;
    name: string;
    major: string;
    role: string;
    memberId: string;
  }[];
}

export const getSearchMembers = async (search: string) => {
  const clubId = 1;
  const data = await adminClient.get<ClubMember>(`/members/${clubId}/search?keyword=${search}`);

  return data;
};
