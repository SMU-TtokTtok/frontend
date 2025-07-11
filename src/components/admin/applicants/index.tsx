'use client';

import { useSearchParams } from 'next/navigation';
import * as S from './applicants.css';
import EvaluationTabs from './evaluationTabs';
import SearchBarArea from './searchBarArea';
import ApplicantFilterBar from './applicantFilterBar';
import ApplicantList from './applicantList/applicantList';
import { useState } from 'react';
import PassFailSidebar from './passFailSidebar';
import SearchResult from './searchResult';
import { Evaluation, Sort } from './api/applicants';
import { useModal } from '@/hooks/useModal';
import ConfirmModal from '@/common/components/confirmModal';
import { MESSAGE } from '@/common/constants/message';
function ApplicantsContentPage() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState('');
  const { isOpen, handleModalOpen, handleModalClose } = useModal();
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
            handleConfirmModalOpen={handleModalOpen}
          />
          <SearchBarArea search={search} handleSearchChange={handleSearchChange} />
          <EvaluationTabs selectedOptions={selectedOptions} />
          <div className={S.PanelContainer}>
            <ApplicantFilterBar selectedOptions={selectedOptions} />
            {search && (
              <SearchResult
                selectedOptions={selectedOptions}
                search={search}
                handleModalOpen={handleModalOpen}
              />
            )}
            {!search && (
              <ApplicantList selectedOptions={selectedOptions} handleModalOpen={handleModalOpen} />
            )}
          </div>
        </div>
      </div>
      <ConfirmModal isOpen={isOpen} onClose={handleModalClose}>
        {MESSAGE.applicantsStatus.confirm}
      </ConfirmModal>
    </>
  );
}

export default ApplicantsContentPage;
