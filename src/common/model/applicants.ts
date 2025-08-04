import { Gender, QuestionType } from './applicationForm';

export interface Applicant {
  id: string;
  name: string;
  grade: Grade;
  major: string;
  status: Status;
  interviewDate?: string;
}

export interface ApplicantsInfo {
  hasInterview: boolean;
  currentPage: number;
  totalPage: number;
  totalCount: number;
  applicants: Applicant[];
}

export type Grade = 'FIRST_GRADE' | 'SECOND_GRADE' | 'THIRD_GRADE' | 'FOURTH_GRADE';
type StudentStatus = 'ENROLLED' | 'ABSENCE';
type Status = 'EVALUATING' | 'PASS' | 'FAIL';

export interface Answer {
  title: string;
  subTitle: string;
  questionType: QuestionType;
  isEssential: boolean;
  content: string[];
  value: string;
}

export interface Memo {
  id: string;
  content: string;
}

export interface ApplicantDetailInfo {
  name: string;
  age: number;
  major: string;
  email: string;
  phone: string;
  studentStatus: StudentStatus;
  grade: Grade;
  gender: Gender;
  answers: Answer[];
  memos: Memo[];
}
