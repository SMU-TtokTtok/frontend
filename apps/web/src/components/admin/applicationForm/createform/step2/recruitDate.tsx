import * as S from './step2.css';
import InputDate from './datePicker';
import { RecruitData } from '.';
interface RecruitDateProps {
  handleRecruitData: (key: keyof RecruitData, value: string | null) => void;
}

function RecruitDate({ handleRecruitData }: RecruitDateProps) {
  return (
    <div className={S.container}>
      <p className={S.label}>
        모집기간<span className={S.required}>*</span>
      </p>
      <div className={S.datePickerContainer}>
        <InputDate isStartDate={true} type="recruit" handleRecruitData={handleRecruitData} />
        <span>&nbsp;~&nbsp;</span>
        <InputDate isStartDate={false} type="recruit" handleRecruitData={handleRecruitData} />
      </div>
    </div>
  );
}

export default RecruitDate;
