'use client';
import { ApplicantListParams } from '../api/applicants';
import { useApplicantList, usePatchApplicantStatus } from '@/hooks/applicants';
import ApplicantItem from './applicantItem';
import Empty from '@/common/components/empty';
import * as S from './applicantList.css';
import { MESSAGE } from '@/common/constants/message';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';

interface ApplicantListProps {
  selectedOptions: ApplicantListParams;
  openConfirmModalWithMessage: (message: string) => void;
  handleSelectApplicant: (applicantId: string) => void;
}

function ApplicantList({
  selectedOptions,
  openConfirmModalWithMessage,
  handleSelectApplicant,
}: ApplicantListProps) {
  const { applicants, hasNextPage, fetchNextPage, isFetchingNextPage } = useApplicantList({
    selectedOptions,
  });
  const { handleFavoriteStatus } = usePatchApplicantStatus({
    openConfirmModalWithMessage,
  });
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const isEmpty = applicants?.length === 0;

  return (
    <>
      {isEmpty && <Empty className={S.empty}>{MESSAGE.empty.noApplicant}</Empty>}
      {!isEmpty && (
        <ul>
          {applicants?.map((applicant) => {
            return (
              <ApplicantItem
                key={applicant.id}
                applicant={applicant}
                selectedOptions={selectedOptions}
                handleFavoriteStatus={handleFavoriteStatus}
                handleSelectApplicant={handleSelectApplicant}
              />
            );
          })}
          <div ref={ref} />
        </ul>
      )}
    </>
  );
}

export default ApplicantList;
