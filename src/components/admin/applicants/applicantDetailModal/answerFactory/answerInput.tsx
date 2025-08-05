import { Answer } from '@/common/model/applicants';
import * as S from '../applicantDetailModal.css';
import Input from '@/common/ui/input';
interface AnswerInputProps {
  answer: Answer;
}

function AnswerInput({ answer }: AnswerInputProps) {
  return (
    <div className={S.answer}>
      <label className={S.label}>
        {answer.title}
        {answer.isEssential && <span className={S.essential}>*</span>}
      </label>
      <h3 className={S.subTitle}>{answer.subTitle}</h3>
      <Input variant="secondary" readOnly className={S.AnswerInput} value={answer.value} />
    </div>
  );
}

export default AnswerInput;
