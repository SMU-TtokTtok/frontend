import { adminClient } from '@/common/apis/ttockTtockClient';

interface GradeCount {
  totalCount: number;
  firstGradeCount: number;
  secondGradeCount: number;
  thirdGradeCount: number;
  fourthGradeCount: number;
}

export const getGradeCount = async () => {
  const data = await adminClient.get<GradeCount>(`/api/members/grade-count`);

  return data;
};
