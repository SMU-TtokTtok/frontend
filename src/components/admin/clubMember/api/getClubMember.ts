import { adminClient } from '@/common/apis/ttockTtockClient';

export interface ClubMember {
  currentPage: number;
  totalPage: number;
  totalCount: number;
  clubMembers: [
    {
      memberId: string;
      name: string;
      grade: string;
      major: string;
      role: string;
    },
  ];
}

export const getClubMember = async ({ page = 1, size = 5 }: { page?: number; size?: number }) => {
  const clubId = 1;
  const userName = '홍길동';
  const params = new URLSearchParams({ page: String(page), size: String(size) });
  const data = await adminClient.get<ClubMember>(
    `/club/member?clubId=${clubId}&userName=${userName}&${params.toString()}`,
  );

  return data;
};
