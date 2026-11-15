import * as S from './step2.css';
import InputDate from './datePicker';
import { RecruitData } from '.';
import { MAX_RECRUIT_MONTHS } from '@/common/util/recruitPeriod';
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
      <p className={S.hint}>
        모집 기간은 시작일부터 최대 {MAX_RECRUIT_MONTHS}개월까지 설정할 수 있어요.
      </p>
    </div>
  );
}

export default RecruitDate;
