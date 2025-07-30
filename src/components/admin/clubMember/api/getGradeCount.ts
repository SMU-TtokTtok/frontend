import { adminClient } from '@/common/apis/ttockTtockClient';

interface GradeCount {
  totalCount: number;
  firstGradeCount: number;
  secondGradeCount: number;
  thirdGradeCount: number;
  fourthGradeCount: number;
}

export const getGradeCount = async () => {
  const clubId = 1;
  //추후에 id 반영
  const data = await adminClient.get<GradeCount>(`/members/${clubId}/total-count`);

  return data;
};
