export interface Question {
  questionId: string;
  title: string;
  subTitle: string;
  questionType: 'CHECKBOX' | 'RADIO' | 'SHORT_ANSWER' | 'LONG_ANSWER' | 'FILE';
  isEssential: boolean;
  content: string[] | null;
}

export interface getForm {
  formId: string;
  title: string;
  subTitle: string;
  questions: Question[];
}

export interface TempDataAnswer {
  questionId: string;
  value: string | string[] | null;
}

export interface TempData {
  name: string | null;
  age: number | null;
  major: string | null;
  email: string | null;
  phone: string | null;
  studentStatus: 'ENROLLED' | 'ABSENCE' | null;
  grade: 'FIRST_GRADE' | 'SECOND_GRADE' | 'THIRD_GRADE' | 'FOURTH_GRADE' | null;
  gender: 'MALE' | 'FEMALE' | null;
  applyFormId: string | null;
  answers: TempDataAnswer[] | [];
}

export interface getTempData {
  hasTempData: boolean;
  data: TempData | null;
}
