'use client';
import Modal from '@/common/ui/modal/modal';
import Image from 'next/image';
import React, { Suspense } from 'react';
import * as S from './applicantDetailModal.css';
import close_white from '@/assets/cancel_white.svg';
import { useApplicantInfo } from '@/hooks/applicants';
import Tag from '@/common/ui/tag';
import { getGradeStyle } from '@/common/util/getGradeStyle';
import { getKoreanGrade } from '@/common/util/getKoreanGrade';

interface ApplicantHeaderProps {
  applicantId: string;
}

function ApplicantHeaderContent({ applicantId }: ApplicantHeaderProps) {
  const { data: applicant } = useApplicantInfo(applicantId);

  return (
    <Modal.Header
      img={<Image src={close_white} alt="닫기" className={S.closeButton} />}
      className={S.header}
      label={
        <div className={S.headerLabelContent}>
          {applicant && (
            <Tag variant={getGradeStyle(applicant.grade)} className={S.headerTag}>
              {getKoreanGrade(applicant.grade)}
            </Tag>
          )}
          <span>{applicant?.name}</span>
        </div>
      }
      labelClassName={S.headerLabel}
    />
  );
}

function ApplicantHeader({ applicantId }: ApplicantHeaderProps) {
  return (
    <Suspense
      fallback={
        <Modal.Header
          img={<Image src={close_white} alt="닫기" className={S.closeButton} />}
          className={S.header}
        />
      }
    >
      <ApplicantHeaderContent applicantId={applicantId} />
    </Suspense>
  );
}

export default ApplicantHeader;
