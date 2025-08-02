'use client';
import { usePatchApplicantStatus } from '@/hooks/applicants';
import PassFailItem from './passFailItem';
import { Applicant } from '@/common/model/applicants';
import { ApplicantListParams } from '../api/applicants';

interface ApplicantListProps {
  applicants: Applicant[];
  selectedOptions: ApplicantListParams;
  openConfirmModalWithMessage: (message: string) => void;
}

function PassFailList({
  applicants,
  openConfirmModalWithMessage,
  selectedOptions,
}: ApplicantListProps) {
  const { handleFavoriteStatus } = usePatchApplicantStatus({ openConfirmModalWithMessage });

  return (
    <ul>
      {applicants.slice(0, 3).map((applicant) => {
        return (
          <PassFailItem
            key={applicant.id}
            applicant={applicant}
            handleFavoriteStatus={handleFavoriteStatus}
            selectedOptions={selectedOptions}
          />
        );
      })}
    </ul>
  );
}

export default PassFailList;
