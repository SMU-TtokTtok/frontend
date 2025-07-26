import { Answer } from '@/common/model/applicants';
import AnswerInput from './answerInput';
import AnswerTextarea from './answerTextarea';
import AnswerRadio from './answerRadio';
import AnswerCheckbox from './answerCheckbox';

interface AnswerFactoryProps {
  answer: Answer;
}
function AnswerFactory({ answer }: AnswerFactoryProps) {
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
      return (
        <div>
          {answer.content.map((file, index) => (
            <div key={index}>
              <a href={file} target="_blank" rel="noopener noreferrer">
                {file}
              </a>
            </div>
          ))}
        </div>
      );
  }
}

export default AnswerFactory;
