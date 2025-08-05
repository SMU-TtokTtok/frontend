import { Answer } from '@/common/model/applicants';
import Checkbox from '@/common/ui/checkbox';
import check from '@/assets/selected_check_box.svg';
import * as S from '../applicantDetailModal.css';
interface AnswerCheckboxProps {
  answer: Answer;
}

function AnswerCheckbox({ answer }: AnswerCheckboxProps) {
  return (
    <div className={S.answer}>
      <label className={S.label}>
        {answer.title}
        {answer.isEssential && <span className={S.essential}>*</span>}
      </label>
      <h3 className={S.subTitle}>{answer.subTitle}</h3>
      {answer.content.map((option, index) => (
        <div key={index} className={S.answerCheckboxContainer}>
          <Checkbox
            type="checkbox"
            name={answer.title}
            value={option}
            defaultChecked={answer.value.includes(option)}
            label={option}
            className={S.answerCheckbox}
            img={check}
            imgSize={S.imgStyle}
            disabled
          />
        </div>
      ))}
    </div>
  );
}

export default AnswerCheckbox;
