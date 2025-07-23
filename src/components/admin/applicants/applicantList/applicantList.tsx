'use client';
import { ApplicantListParams } from '../api/applicants';
import { useApplicantList, usePatchApplicantStatus } from '@/hooks/applicants';
import ApplicantItem from './applicantItem';
import Empty from '@/common/components/empty';
import * as S from './applicantList.css';
import { MESSAGE } from '@/common/constants/message';

interface ApplicantListProps {
  selectedOptions: ApplicantListParams;
  handleModalOpen: () => void;
}

function ApplicantList({ selectedOptions, handleModalOpen }: ApplicantListProps) {
  const { data: applicants } = useApplicantList({ selectedOptions });
  const { handleFavoriteStatus } = usePatchApplicantStatus({ handleModalOpen });
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
              />
            );
          })}
        </ul>
      )}
    </>
  );
}

export default ApplicantList;
