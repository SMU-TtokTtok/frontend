import { ApplicantListParams } from '../api/applicants';
import { useApplicantList, usePatchApplicantStatus } from '@/hooks/applicants';
import ApplicantItem from './applicantItem';

interface ApplicantListProps {
  selectedOptions: ApplicantListParams;
  handleModalOpen: () => void;
}

function ApplicantList({ selectedOptions, handleModalOpen }: ApplicantListProps) {
  const { data: applicants } = useApplicantList({ selectedOptions });
  const { handleFavoriteStatus } = usePatchApplicantStatus({ handleModalOpen });

  return (
    <ul>
      {applicants.map((applicant) => {
        return (
          <ApplicantItem
            key={applicant.id}
            applicant={applicant}
            handleFavoriteStatus={handleFavoriteStatus}
          />
        );
      })}
    </ul>
  );
}

export default ApplicantList;
