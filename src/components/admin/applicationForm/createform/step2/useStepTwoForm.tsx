import { useState } from 'react';
import { RecruitData } from '.';
import { loadFromSession } from '@/common/util/sessionStorageUtil';

export const useStepTwoForm = () => {
  const [recruitData, setRecruitData] = useState<RecruitData>({
    recruitStartDate: loadFromSession('recruitStartDate'),
    recruitEndDate: loadFromSession('recruitEndDate'),
    maxApplyCount: loadFromSession('maxApplyCount'),
    applicableGrades: loadFromSession('selectedGrades'),
    hasInterview: loadFromSession('hasInterview'),
    interviewStartDate: loadFromSession('interviewStartDate'),
    interviewEndDate: loadFromSession('interviewEndDate'),
  });

  const handleRecruitData = (
    key: keyof RecruitData,
    value: string | number | number[] | boolean | null,
  ) => {
    setRecruitData((prevData) => ({
      ...prevData,
      [key]: value,
    }));
  };
  return { recruitData, handleRecruitData };
};
