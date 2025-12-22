'use client';
import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import * as S from './applicants.css';
import EvaluationTabs from './evaluationTabs';
import SearchBarArea from './searchBarArea';
import ApplicantFilterBar from './applicantFilterBar';
import ApplicantList from './applicantList/applicantList';
import PassFailSidebar from './passFailSidebar';
import SearchResult from './searchResult';
import { Evaluation, Sort } from './api/applicants';
import { useModal } from '@/hooks/useModal';
import ConfirmModal from '@/common/components/confirmModal';
import { MESSAGE } from '@/common/constants/message';
import ApplicantDetailModal from './applicantDetailModal';
import LoadingSpinner from '@/common/ui/loading';
import QueryErrorBoundary from '@/components/error/queryErrorBoundary';
function ApplicantsContentPage() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState('');
  const [selectedApplicantId, setSelectedApplicantId] = useState<string>('0');
  const [confirmMessage, setConfirmMessage] = useState<string>(MESSAGE.applicantsStatus.confirm);

  const {
    isOpen: isConfirmModalOpen,
    handleModalOpen: handleConfirmModalOpen,
    handleModalClose: handleConfirmModalClose,
  } = useModal();

  const {
    isOpen: isApplicantDetailModalOpen,
    handleModalOpen: handleApplicantDetailModalOpen,
    handleModalClose: handleApplicantDetailModalClose,
  } = useModal();

  const openConfirmModalWithMessage = (message: string) => {
    setConfirmMessage(message);
    handleConfirmModalOpen();
  };

  const handleSelectApplicant = (applicantId: string) => {
    setSelectedApplicantId(applicantId);
    handleApplicantDetailModalOpen();
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const selectedOptions = {
    evaluation: searchParams.get('evaluation') as Evaluation,
    sort: searchParams.get('sort') as Sort,
    isEvaluating: searchParams.get('isEvaluating') === 'true',
  };

  return (
    <>
      <div className={S.container}>
        <div className={S.wrapper}>
          <h3 className={S.title}>✏️ 지원자 관리</h3>
          <QueryErrorBoundary>
            <PassFailSidebar
              selectedOptions={selectedOptions}
              openConfirmModalWithMessage={openConfirmModalWithMessage}
            />
          </QueryErrorBoundary>
          <SearchBarArea search={search} handleSearchChange={handleSearchChange} />
          <EvaluationTabs selectedOptions={selectedOptions} />
          <div className={S.PanelContainer}>
            <ApplicantFilterBar selectedOptions={selectedOptions} />
            {search && (
              <Suspense fallback={<LoadingSpinner />}>
                <QueryErrorBoundary>
                  <SearchResult
                    search={search}
                    selectedOptions={selectedOptions}
                    openConfirmModalWithMessage={openConfirmModalWithMessage}
                    handleSelectApplicant={handleSelectApplicant}
                  />
                </QueryErrorBoundary>
              </Suspense>
            )}
            {!search && (
              <Suspense fallback={<LoadingSpinner />}>
                <QueryErrorBoundary>
                  <ApplicantList
                    selectedOptions={selectedOptions}
                    openConfirmModalWithMessage={openConfirmModalWithMessage}
                    handleSelectApplicant={handleSelectApplicant}
                  />
                </QueryErrorBoundary>
              </Suspense>
            )}
            <div />
          </div>
        </div>
      </div>
      <ConfirmModal isOpen={isConfirmModalOpen} onClose={handleConfirmModalClose}>
        {confirmMessage}
      </ConfirmModal>
      <ApplicantDetailModal
        applicantId={selectedApplicantId}
        isOpen={isApplicantDetailModalOpen}
        onClose={handleApplicantDetailModalClose}
      />
    </>
  );
}

export default ApplicantsContentPage;
