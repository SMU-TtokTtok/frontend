import { Answer } from '@/common/model/applicants';
import * as S from '../applicantDetailModal.css';
interface AnswerTextareaProps {
  answer: Answer;
}

function AnswerTextarea({ answer }: AnswerTextareaProps) {
  return (
    <div className={S.answer}>
      <label className={S.label}>
        {answer.title}
        {answer.isEssential && <span className={S.essential}>*</span>}
      </label>
      <h3 className={S.subTitle}>{answer.subTitle}</h3>
      <textarea
        className={S.AnswerTextarea}
        value={answer.value}
        readOnly
        rows={4}
        style={{ resize: 'none', width: '100%' }}
      />
    </div>
  );
}

export default AnswerTextarea;
