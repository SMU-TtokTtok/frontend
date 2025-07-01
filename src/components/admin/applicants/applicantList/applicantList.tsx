import { ApplicantListParams } from '../api/applicants';
import { useApplicantList, usePatchApplicantStatus } from '@/hooks/applicants';
import ApplicantItem from './applicantItem';

interface ApplicantListProps {
  selectedOptions: ApplicantListParams;
}

function ApplicantList({ selectedOptions }: ApplicantListProps) {
  const { data: applicants } = useApplicantList({ selectedOptions });
  const { handleFavoriteStatus } = usePatchApplicantStatus();

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
