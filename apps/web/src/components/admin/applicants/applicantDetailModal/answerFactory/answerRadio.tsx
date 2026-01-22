import { Answer } from '@/common/model/applicants';
import Checkbox from '@/common/ui/checkbox';
import check from '@/assets/check_radio.svg';
import * as S from '../applicantDetailModal.css';

interface AnswerRadioProps {
  answer: Answer;
}

function AnswerRadio({ answer }: AnswerRadioProps) {
  const isValueExist = answer.value === null;

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
            type="radio"
            name={answer.title}
            value={option}
            defaultChecked={isValueExist ? false : answer.value === option}
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

export default AnswerRadio;
