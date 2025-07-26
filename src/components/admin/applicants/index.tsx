'use client';
import { useSearchParams } from 'next/navigation';
import { useState } from 'react';
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
function ApplicantsContentPage() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState('');
  const [selectedApplicantId, setSelectedApplicantId] = useState<number>(0);
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

  const handleSelectApplicant = (applicantId: number) => {
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
          <PassFailSidebar
            selectedOptions={selectedOptions}
            handleConfirmModalOpen={handleConfirmModalOpen}
          />
          <SearchBarArea search={search} handleSearchChange={handleSearchChange} />
          <EvaluationTabs selectedOptions={selectedOptions} />
          <div className={S.PanelContainer}>
            <ApplicantFilterBar selectedOptions={selectedOptions} />
            {search && (
              <SearchResult
                search={search}
                selectedOptions={selectedOptions}
                handleConfirmModalOpen={handleConfirmModalOpen}
                handleSelectApplicant={handleSelectApplicant}
              />
            )}
            {!search && (
              <ApplicantList
                selectedOptions={selectedOptions}
                handleConfirmModalOpen={handleConfirmModalOpen}
                handleSelectApplicant={handleSelectApplicant}
              />
            )}
          </div>
        </div>
      </div>
      <ConfirmModal isOpen={isConfirmModalOpen} onClose={handleConfirmModalClose}>
        {MESSAGE.applicantsStatus.confirm}
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
