'use client';
import { usePatchApplicantStatus } from '@/hooks/applicants';
import PassFailItem from './passFailItem';
import { ApplicantsInfo } from '@/common/model/applicants';

interface ApplicantListProps {
  applicants: ApplicantsInfo[];
  openConfirmModalWithMessage: (message: string) => void;
}

function PassFailList({ applicants, openConfirmModalWithMessage }: ApplicantListProps) {
  const { handleFavoriteStatus } = usePatchApplicantStatus({ openConfirmModalWithMessage });

  return (
    <ul>
      {applicants.slice(0, 3).map((applicant) => {
        return (
          <PassFailItem
            key={applicant.id}
            applicant={applicant}
            handleFavoriteStatus={handleFavoriteStatus}
          />
        );
      })}
    </ul>
  );
}

export default PassFailList;
