import { adminClient } from '@/common/apis/ttockTtockClient';

export interface ClubMember {
  clubMembers: {
    grade: string;
    name: string;
    major: string;
    role: string;
  }[];
}

export const getSearchMembers = async (search: string) => {
  const username = '홍길동';
  const clubId = 1;
  const data = await adminClient.get<ClubMember>(
    `/club/members/search?username=${username}&clubId=${clubId}&keyword=${search}`,
  );

  return data;
};
