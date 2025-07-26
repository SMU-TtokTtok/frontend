import Modal from '@/common/ui/modal/modal';
import React from 'react';
import UserInfo from './userInfo';
import Memo from './memo';
import { useApplicantInfo } from '@/hooks/applicants';
import * as S from './applicantDetailModal.css';

interface ApplicantDetailProps {
  applicantId: number;
}

function ApplicantDetail({ applicantId }: ApplicantDetailProps) {
  const { data: applicant } = useApplicantInfo(applicantId);

  return (
    <Modal.Body className={S.body}>
      {applicant && <UserInfo data={applicant} />}
      {applicant && <Memo data={applicant} applicantId={applicantId} />}
    </Modal.Body>
  );
}

export default ApplicantDetail;
