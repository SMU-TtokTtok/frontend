import { ApplicantsInfo } from '@/common/model/applicants';
import { ApplicantListParams } from '../api/applicants';
import PassFailList from './passFailList';
import * as S from './passFailSidebar.css';
import Empty from '@/common/components/empty';

interface ApplicantGroupProps {
  label: string;
  selectedOptions: ApplicantListParams;
  applicants: ApplicantsInfo[];
  handleModalOpen: () => void;
  handleListModalOpen: () => void;
  handlePassTypeChange: () => void;
}

export default function ApplicantGroup({
  label,
  applicants,
  handleModalOpen,
  handleListModalOpen,
  handlePassTypeChange,
}: ApplicantGroupProps) {
  const handleListModalOpenWithType = () => {
    handlePassTypeChange();
    handleListModalOpen();
  };
  const emptyMessage = `${label}가 없어요 `;

  return (
    <div className={S.listContainer}>
      <div className={S.labelWrapper}>
        <label className={S.sideBarLabel}>{label}</label>
        <small className={S.plus} onClick={handleListModalOpenWithType}>
          더보기
        </small>
      </div>
      {applicants.length === 0 && <Empty className={S.empty['sideBar']}>{emptyMessage}</Empty>}
      {applicants.length > 0 && (
        <PassFailList applicants={applicants} handleModalOpen={handleModalOpen} />
      )}
    </div>
  );
}
