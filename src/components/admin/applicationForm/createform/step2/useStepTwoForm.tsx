import { useState } from 'react';
import { RecruitData } from '.';
import { loadFromSession } from '@/common/util/sessionStorageUtil';

export const useStepTwoForm = () => {
  const [recruitData, setRecruitData] = useState<RecruitData>({
    recruitStartDate: loadFromSession('recruitStartDate'),
    recruitEndDate: loadFromSession('recruitEndDate'),
    recruitMember: loadFromSession('recruitMember'),
    selectedGrades: loadFromSession('selectedGrades'),
    withInterview: loadFromSession('withInterview'),
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
