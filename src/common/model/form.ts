interface Question {
  title: string;
  subTitle: string;
  questionType: 'CHECKBOX' | 'RADIO' | 'SHORT_ANSWER' | 'LONG_ANSWER' | 'FILE';
  isEssential: boolean;
  content: string[] | null;
}

export interface getForm {
  title: string;
  subTitle: string;
  questions: Question[];
}
