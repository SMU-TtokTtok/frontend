/* eslint-disable @typescript-eslint/no-explicit-any */

export const saveToSession = (key: string, value: any) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const removeFromSession = (key: string) => {
  sessionStorage.removeItem(key);
};

export const loadFromSession = <T = any>(key: string): T | null => {
  try {
    const item = sessionStorage.getItem(key);
    return item ? JSON.parse(item) : null;
  } catch {
    return null;
  }
};

export const clearFormSession = () => {
  const formKeys = [
    'recruitStartDate',
    'recruitEndDate',
    'maxApplyCount',
    'selectedGrades',
    'applicableGrades',
    'hasInterview',
    'interviewStartDate',
    'interviewEndDate',
  ];

  formKeys.forEach((key) => {
    sessionStorage.removeItem(key);
  });
};
