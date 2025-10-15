'use client';
import { useAdminForm } from '@/hooks/useAdminForm';
import * as S from './applicationForm.css';
import EmptyPage from './emptyPage';
import { useApplicationForm } from '@/hooks/useApplicationForm';
import { useEffect, useRef, useState } from 'react';
import QuestionForm from './questionForm';
import { useApplicationFormValidation } from '@/hooks/useApplicationFormVaildation';
import QuestionNavigator from './questionNavigator';
import Button from '@/common/ui/button';
import { useUpdateFormMutation } from '@/hooks/useAdminFormMutation';
import ConfirmModal from '@/common/components/confirmModal';
import { useModal } from '@/hooks/useModal';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useFollowSidebar } from '@/hooks/useFollowSidebar';
import LoadingSpinner from '@/common/ui/loading';
import { useAuthStore } from '@/common/store/adminAuthStore';
import QueryErrorBoundary from '@/components/error/queryErrorBoundary';
import { ApplyFormField } from '@/common/model/applicationForm';

function ApplicationFormPage() {
  const { profile } = useAuthStore((state) => state);
  const { data, isLoading } = useAdminForm(profile?.clubId ?? '');

  const {
    questionsData,
    previousStepData,
    setQeustionsData,
    handleQuestionTypeChange,
    handleAddField,
    handleUpdateField,
    handleDeleteField,
    handleEssentialChange,
    handleOptionChange,
    handleOptionAdd,
    handleOptionDelete,
    handleChangeTitle,
    handleChangeSubTitle,
  } = useApplicationForm();

  const { result, errors } = useApplicationFormValidation(questionsData);
  const [isSubmit, setIsSubmit] = useState(false);
  const { handleUpdateForm } = useUpdateFormMutation();
  const { isOpen, handleModalClose, handleModalOpen } = useModal();
  const scrollRefs = useRef<HTMLDivElement[]>([]);

  const handleScrollTo = (index: number) => {
    const target = scrollRefs.current[index];
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  };

  const mergeFormData = {
    ...questionsData,
    ...previousStepData,
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmit(true);

    if (result.success) {
      handleUpdateForm(mergeFormData, handleModalOpen);
    } else {
      console.error('Validation errors:', errors);
    }
  };
  const handleReorderQuestions = (newOrder: ApplyFormField[]) => {
    setQeustionsData((prev) => ({
      ...prev,
      questions: newOrder,
    }));
  };

  const { barPosition } = useFollowSidebar({ initialPosition: 188 });

  useEffect(() => {
    if (data) {
      setQeustionsData(data);
    }
  }, [data, setQeustionsData]);

  const isEmpty = questionsData?.title === null;

  if (isLoading) {
    return <LoadingSpinner className={S.loading} />;
  }

  if (isEmpty) {
    return <EmptyPage />;
  }

  return (
    <>
      <form className={S.formContainer} onSubmit={handleSubmit}>
        <h3 className={S.title}>📋 지원폼 관리</h3>
        <QueryErrorBoundary>
          <QuestionForm
            formData={questionsData}
            errors={errors}
            isSubmit={isSubmit}
            handleQuestionTypeChange={handleQuestionTypeChange}
            handleAddField={handleAddField}
            handleUpdateField={handleUpdateField}
            handleDeleteField={handleDeleteField}
            handleEssentialChange={handleEssentialChange}
            handleOptionChange={handleOptionChange}
            handleOptionAdd={handleOptionAdd}
            handleOptionDelete={handleOptionDelete}
            handleChangeTitle={handleChangeTitle}
            handleChangeSubTitle={handleChangeSubTitle}
            handleReorderQuestions={handleReorderQuestions}
            scrollRefs={scrollRefs}
          />
        </QueryErrorBoundary>
        <div
          className={S.navigatorContainer}
          style={assignInlineVars({
            [S.sidebarTop]: `${barPosition}px`,
          })}
        >
          <QuestionNavigator fields={questionsData.questions} handleScrollTo={handleScrollTo} />
          <Button type="submit" variant="primary" className={S.submitButton}>
            저장하기
          </Button>
        </div>
      </form>
      <ConfirmModal isOpen={isOpen} onClose={handleModalClose}>
        수정이 완료되었어요!
      </ConfirmModal>
    </>
  );
}

export default ApplicationFormPage;
