import { Answer } from '@/common/model/applicants';
import AnswerInput from './answerInput';
import AnswerTextarea from './answerTextarea';
import AnswerRadio from './answerRadio';
import AnswerCheckbox from './answerCheckbox';
import AnswerFile from './answerFile';

interface AnswerFactoryProps {
  answer: Answer;
  applicantName: string;
}
function AnswerFactory({ answer, applicantName }: AnswerFactoryProps) {
  switch (answer.questionType) {
    case 'SHORT_ANSWER':
      return <AnswerInput answer={answer} />;
    case 'LONG_ANSWER':
      return <AnswerTextarea answer={answer} />;
    case 'RADIO':
      return <AnswerRadio answer={answer} />;
    case 'CHECKBOX':
      return <AnswerCheckbox answer={answer} />;
    case 'FILE':
      return <AnswerFile answer={answer} applicantName={applicantName} />;
  }
}

export default AnswerFactory;
