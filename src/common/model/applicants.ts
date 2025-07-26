import { Gender, QuestionType } from './applicationForm';
export interface ApplicantsInfo {
  id: number;
  name: string;
  grade: number;
  department: string;
  status: string;
}

type Grade = 'FIRST_GRADE' | 'SECOND_GRADE' | 'THIRD_GRADE' | 'FOURTH_GRADE';
type StudentStatus = 'ENROLLED' | 'ABSENCE';

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

export interface ApplicantInfo {
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
