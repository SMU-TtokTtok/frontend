import { RecruitData } from '.';
import InputDate from './datePicker';
import * as S from './step2.css';
interface InterviewDateProps {
  handleRecruitData?: (key: keyof RecruitData, value: string | null) => void;
}

function InterviewDate({ handleRecruitData }: InterviewDateProps) {
  return (
    <div className={S.interviewContainer}>
      <p className={S.label}>
        면접기간<span className={S.required}>*</span>
      </p>
      <div className={S.DateContainer}>
        <InputDate isStartDate={true} type="interview" handleRecruitData={handleRecruitData} />
        <span>&nbsp;~&nbsp;</span>
        <InputDate isStartDate={false} type="interview" handleRecruitData={handleRecruitData} />
      </div>
    </div>
  );
}

export default InterviewDate;
