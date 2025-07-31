'use client';
import Modal from '@/common/ui/modal/modal';
import React, { Suspense } from 'react';
import UserInfo from './userInfo';
import Memo from './memo';
import { useApplicantInfo } from '@/hooks/applicants';
import * as S from './applicantDetailModal.css';
import LoadingSpinner from '@/common/ui/loading';

interface ApplicantDetailProps {
  applicantId: number;
}

function ApplicantDetail({ applicantId }: ApplicantDetailProps) {
  const { data: applicant } = useApplicantInfo(applicantId);

  return (
    <Modal.Body className={S.body}>
      <Suspense fallback={<LoadingSpinner />}>
        {applicant && <UserInfo data={applicant} />}

        {applicant && <Memo data={applicant} applicantId={applicantId} />}
      </Suspense>
    </Modal.Body>
  );
}

export default ApplicantDetail;
