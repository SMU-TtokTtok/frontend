import { loadFromSession } from '@/common/util/sessionStorageUtil';
import { isRecruitStepValid } from './recruitStepRules';

export const useRecruitValidation = (withInterview: boolean): boolean =>
  isRecruitStepValid(
    {
      recruitStartDate: loadFromSession('recruitStartDate'),
      recruitEndDate: loadFromSession('recruitEndDate'),
      maxApplyCount: loadFromSession('maxApplyCount'),
      applicableGrades: loadFromSession('applicableGrades'),
      interviewStartDate: loadFromSession('interviewStartDate'),
      interviewEndDate: loadFromSession('interviewEndDate'),
    },
    withInterview,
  );
