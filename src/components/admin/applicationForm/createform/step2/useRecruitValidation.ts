import { loadFromSession } from '@/common/util/sessionStorageUtil';

export const useRecruitValidation = (withInterview: boolean): boolean => {
  const baseKeys = ['recruitStartDate', 'recruitEndDate', 'recruitMember', 'selectedGrades'];
  const interviewKeys = ['interviewStartDate', 'interviewEndDate'];

  const requiredKeys = withInterview ? [...baseKeys, ...interviewKeys] : baseKeys;

  const hasSessionValue = (key: string): boolean => {
    const value = loadFromSession(key);
    return value !== null && value !== '';
  };

  return requiredKeys.every((key) => hasSessionValue(key));
};
