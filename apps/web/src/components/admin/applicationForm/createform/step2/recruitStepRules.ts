import { getMaxRecruitEndDateString } from '@/common/util/recruitPeriod';

export interface RecruitStepValues {
  recruitStartDate: string | null;
  recruitEndDate: string | null;
  maxApplyCount: number | null;
  applicableGrades: number[] | null;
  interviewStartDate: string | null;
  interviewEndDate: string | null;
}

export const toggleGrade = (grades: number[], grade: number) =>
  grades.includes(grade) ? grades.filter((g) => g !== grade) : [...grades, grade];

// 서버 ApplyFormInputPolicy와 같은 규칙. 날짜는 'yyyy-MM-dd'라 문자열 비교로 순서를 본다
export const isRecruitStepValid = (values: RecruitStepValues, withInterview: boolean) => {
  const { recruitStartDate, recruitEndDate, maxApplyCount, applicableGrades } = values;

  if (!recruitStartDate || !recruitEndDate || recruitStartDate > recruitEndDate) return false;
  const maxEndDate = getMaxRecruitEndDateString(recruitStartDate);
  if (maxEndDate && recruitEndDate > maxEndDate) return false;
  if (!maxApplyCount || maxApplyCount < 1) return false;
  if (!applicableGrades || applicableGrades.length === 0) return false;

  if (withInterview) {
    const { interviewStartDate, interviewEndDate } = values;
    if (!interviewStartDate || !interviewEndDate || interviewStartDate > interviewEndDate) {
      return false;
    }
  }
  return true;
};
