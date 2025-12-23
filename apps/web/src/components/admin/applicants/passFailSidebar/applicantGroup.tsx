import { Applicant } from '@/common/model/applicants';
import { ApplicantListParams } from '../api/applicants';
import PassFailList from './passFailList';
import * as S from './passFailSidebar.css';
import Empty from '@/common/components/empty';

interface ApplicantGroupProps {
  isPass: boolean;
  label: string;
  selectedOptions: ApplicantListParams;
  applicants: Applicant[];
  openConfirmModalWithMessage: (message: string) => void;
  handleListModalOpen: () => void;
  handlePassTypeChange: (isPass: boolean) => void;
}

export default function ApplicantGroup({
  isPass,
  label,
  applicants,
  selectedOptions,
  openConfirmModalWithMessage,
  handleListModalOpen,
  handlePassTypeChange,
}: ApplicantGroupProps) {
  const handleListModalOpenWithType = () => {
    handlePassTypeChange(isPass);
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
        <PassFailList
          selectedOptions={selectedOptions}
          applicants={applicants}
          openConfirmModalWithMessage={openConfirmModalWithMessage}
        />
      )}
    </div>
  );
}
