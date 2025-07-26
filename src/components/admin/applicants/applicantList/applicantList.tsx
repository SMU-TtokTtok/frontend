'use client';
import { ApplicantListParams } from '../api/applicants';
import { useApplicantList, usePatchApplicantStatus } from '@/hooks/applicants';
import ApplicantItem from './applicantItem';
import Empty from '@/common/components/empty';
import * as S from './applicantList.css';
import { MESSAGE } from '@/common/constants/message';

interface ApplicantListProps {
  selectedOptions: ApplicantListParams;
  handleConfirmModalOpen: () => void;
  handleSelectApplicant: (applicantId: number) => void;
}

function ApplicantList({
  selectedOptions,
  handleConfirmModalOpen,
  handleSelectApplicant,
}: ApplicantListProps) {
  const { data: applicants } = useApplicantList({ selectedOptions });
  const { handleFavoriteStatus } = usePatchApplicantStatus({
    handleModalOpen: handleConfirmModalOpen,
  });
  const isEmpty = applicants?.length === 0;

  return (
    <>
      {isEmpty && <Empty className={S.empty}>{MESSAGE.empty.noApplicant}</Empty>}
      {!isEmpty && (
        <ul>
          {applicants?.map((applicant) => {
            return (
              <ApplicantItem
                key={applicant.id}
                applicant={applicant}
                handleFavoriteStatus={handleFavoriteStatus}
                handleSelectApplicant={handleSelectApplicant}
              />
            );
          })}
        </ul>
      )}
    </>
  );
}

export default ApplicantList;
