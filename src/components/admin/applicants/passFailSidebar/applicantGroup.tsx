import { ApplicantsInfo } from '@/common/model/applicants';
import { ApplicantListParams } from '../api/applicants';
import PassFailList from './passFailList';
import * as S from './passFailSidebar.css';

interface ApplicantGroupProps {
  label: string;
  selectedOptions: ApplicantListParams;
  applicants: ApplicantsInfo[];
  handleModalOpen: () => void;
}

export default function ApplicantGroup({
  label,
  applicants,
  handleModalOpen,
}: ApplicantGroupProps) {
  return (
    <div className={S.listContainer}>
      <div className={S.labelWrapper}>
        <label className={S.sideBarLabel}>{label}</label>
        <small className={S.plus}>더보기</small>
      </div>
      <PassFailList applicants={applicants} handleModalOpen={handleModalOpen} />
    </div>
  );
}
