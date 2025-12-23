import * as S from '../questionFrom.css';
import LabelWithInput from './labelWithInput';
import Checkbox from '@/common/ui/checkbox';

function ApplicantInfoField() {
  return (
    <div className={S.applicantInfoField}>
      <div className={S.infoFieldrawsort}>
        <LabelWithInput label="이름" placeholder="이름" disabled />
        <LabelWithInput label="나이" placeholder="나이" disabled />
        <LabelWithInput label="학과" placeholder="학과" disabled />
      </div>
      <div className={S.infoFieldrawsort}>
        <LabelWithInput label="메일" placeholder="xxxxxxx@naver.com" disabled />
        <LabelWithInput label="전화번호" placeholder="010-1234-5678" disabled />
      </div>
      <div className={S.columnSort}>
        <label className={S.applicantInfoLabel}>재학여부</label>
        <div className={S.infoFieldrawsort}>
          <Checkbox variant="primary" className={S.applicantInfoRadio} label="재학 중" disabled />
          <Checkbox variant="primary" className={S.applicantInfoRadio} label="휴학 중" disabled />
        </div>
      </div>
      <div className={S.columnSort}>
        <label className={S.applicantInfoLabel}>현재학년</label>
        <div className={S.infoFieldrawsort}>
          <Checkbox variant="primary" className={S.applicantInfoRadio} label="1학년" disabled />
          <Checkbox variant="primary" className={S.applicantInfoRadio} label="2학년" disabled />
          <Checkbox variant="primary" className={S.applicantInfoRadio} label="3학년" disabled />
          <Checkbox variant="primary" className={S.applicantInfoRadio} label="4학년" disabled />
        </div>
      </div>
      <div className={S.columnSort}>
        <label className={S.applicantInfoLabel}>성별</label>
        <div className={S.infoFieldrawsort}>
          <Checkbox variant="primary" className={S.applicantInfoRadio} label="남성" disabled />
          <Checkbox variant="primary" className={S.applicantInfoRadio} label="여성" disabled />
        </div>
      </div>
    </div>
  );
}

export default ApplicantInfoField;
