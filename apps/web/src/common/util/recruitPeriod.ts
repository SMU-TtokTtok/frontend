import { addMonths, format, isValid, parseISO } from 'date-fns';

// 서버(ApplyFormInputPolicy)와 같은 규칙: 마감일은 시작일의 3개월 뒤 같은 날까지
export const MAX_RECRUIT_MONTHS = 3;

export const getMaxRecruitEndDate = (startDate: Date) => addMonths(startDate, MAX_RECRUIT_MONTHS);

// 'yyyy-MM-dd' 입력용. 시작일이 비었거나 잘못되면 undefined
export const getMaxRecruitEndDateString = (startDate: string | null | undefined) => {
  if (!startDate) return undefined;
  const date = parseISO(startDate);
  return isValid(date) ? format(getMaxRecruitEndDate(date), 'yyyy-MM-dd') : undefined;
};
