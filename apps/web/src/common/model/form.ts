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
