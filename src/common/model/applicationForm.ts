type currentGrade = 1 | 2 | 3 | 4;
export type QuestionType = 'LONG_ANSWER' | 'SHORT_ANSWER' | 'CHECKBOX' | 'RADIO' | 'FILE';
export type Question_KO_Type = '텍스트' | '단답형' | '체크박스' | '라디오' | '파일';
export type Gender = 'MALE' | 'FEMAIL';

export type ApplyFormField = {
  title: string;
  subTitle: string;
  questionType: QuestionType;
  isEssential: boolean;
  content: string[];
};
export interface BasicForm {
  title: string;
  subTitle: string;
  name: string;
  age: number;
  department: string;
  email: string;
  phone: string;
  grade: number;
  gender: Gender;
  isEnrolled: boolean;
}

export interface PreviousStepForm {
  hasInterview: boolean;
  recruitStartDate: string;
  recruitEndDate: string;
  applicableGrades: currentGrade[];
  maxApplyCount: number;
  interviewStartDate: { present: boolean };
  interviewEndDate: { present: boolean };
}

export interface QuestionStepForm {
  formId?: string;
  title: string;
  subTitle: string;
  questions: ApplyFormField[];
}
