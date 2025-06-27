import { ApplicantListParams } from '../api/applicants';
import { useApplicantList } from '@/hooks/applicants';
import ApplicantItem from './applicantItem';

interface ApplicantListProps {
  selectedOptions: ApplicantListParams;
}

function ApplicantList({ selectedOptions }: ApplicantListProps) {
  const { data: applicants } = useApplicantList({ selectedOptions });
  return (
    <ul>
      {applicants.map((applicant) => {
        return <ApplicantItem key={applicant.id} applicant={applicant} />;
      })}
    </ul>
  );
}

export default ApplicantList;
