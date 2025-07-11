'use client';
import { usePatchApplicantStatus } from '@/hooks/applicants';
import PassFailItem from './passFailItem';
import { ApplicantsInfo } from '@/common/model/applicants';

interface ApplicantListProps {
  applicants: ApplicantsInfo[];
  handleModalOpen: () => void;
}

function PassFailList({ applicants, handleModalOpen }: ApplicantListProps) {
  const { handleFavoriteStatus } = usePatchApplicantStatus({ handleModalOpen });

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
