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
import ConfirmCancelModal from '@/common/components/confirmCancelModal';
import { MESSAGE } from '@/common/constants/message';
import ApplicantDetailModal from './applicantDetailModal';
import LoadingSpinner from '@/common/ui/loading';
import QueryErrorBoundary from '@/components/error/queryErrorBoundary';
import Button from '@/common/ui/button';
import { useFinishFormMutation } from '@/hooks/useFinishFormMutation';
import { useAuthStore } from '@/common/store/adminAuthStore';
import { useAdminForm } from '@/hooks/useAdminForm';

function ApplicantsContentPage() {
  const { profile } = useAuthStore((state) => state);
  const { data: formData } = useAdminForm(profile?.clubId ?? '');
  const searchParams = useSearchParams();
  const [search, setSearch] = useState('');
  const [selectedApplicantId, setSelectedApplicantId] = useState<string>('0');
  const [confirmMessage, setConfirmMessage] = useState<string>(MESSAGE.applicantsStatus.confirm);
  const { handleFinishForm, finishFormMutation } = useFinishFormMutation();

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

  const {
    isOpen: isFinishFormModalOpen,
    handleModalOpen: handleFinishFormModalOpen,
    handleModalClose: handleFinishFormModalClose,
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

  const handleFinishFormClick = () => {
    if (formData?.formId === undefined) {
      openConfirmModalWithMessage('지원서 양식 정보를 불러올 수 없습니다.');
      return;
    }
    handleFinishFormModalOpen();
  };

  const handleConfirmFinishForm = () => {
    if (formData?.formId === undefined) return;

    handleFinishForm(formData.formId, () => {
      openConfirmModalWithMessage('지원자 평가가 종료되었습니다.');
    });
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
          <div className={S.headerWrapper}>
            <h3 className={S.title}>✏️ 지원자 관리</h3>
            <Button
              variant="danger"
              className={S.resetButton}
              onClick={handleFinishFormClick}
              disabled={finishFormMutation.isPending}
            >
              🗑 지원자 초기화
            </Button>
          </div>
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
      <ConfirmCancelModal
        isOpen={isFinishFormModalOpen}
        onClose={handleFinishFormModalClose}
        onConfirm={handleConfirmFinishForm}
        title="지원자 초기화"
        message={
          <>
            ⚠️ 지원자 평가를 완전히 종료하시겠습니까?
            <br />
            <br />
            이 작업은 되돌릴 수 없으며 모든 지원자 데이터와 지원폼이 삭제돼요.
            <br />
            초기화 하기전 최종 부원을 연동해주세요!
          </>
        }
      />
    </>
  );
}

export default ApplicantsContentPage;
