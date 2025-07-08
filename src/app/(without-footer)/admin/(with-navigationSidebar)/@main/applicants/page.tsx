import PrivateRoute from '@/common/components/privateRoute';
import ApplicantsContentPage from '@/components/admin/applicants';

function Applicants() {
  return (
    <PrivateRoute>
      <ApplicantsContentPage />
    </PrivateRoute>
  );
}

export default Applicants;
