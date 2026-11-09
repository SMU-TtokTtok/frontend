'use client';
import { useAdminForm } from '@/hooks/useAdminForm';
import * as S from './applicationForm.css';
import EmptyPage from './emptyPage';
import { useApplicationForm } from '@/hooks/useApplicationForm';
import { useEffect, useMemo, useRef, useState } from 'react';
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
import { SCROLL_REF_IDS } from './constants';
import { getQuestionLock } from './editLock';

function ApplicationFormPage() {
  const { profile } = useAuthStore((state) => state);
  const { data, isLoading } = useAdminForm(profile?.clubId ?? '');

  const {
    questionsData,
    previousStepData,
    setQeustionsData,
    handleQuestionTypeChange,
    handleAddField,
    handleAddFieldBelow: addFieldBelow,
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
  const scrollRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToQuestion = (questionId: string) => {
    const target = scrollRefs.current[questionId];
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleScrollTo = (index: number) => {
    const questionId = questionsData.questions[index]?.questionId ?? index.toString();
    scrollToQuestion(questionId);
  };

  const handleAddFieldBelow = (fieldId: string) => {
    const newFieldId = addFieldBelow(fieldId);
    requestAnimationFrame(() => {
      scrollToQuestion(newFieldId);
    });
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
      return;
    }
    if (errors) {
      const firstErrorFieldId = Object.keys(errors?.questions ?? {})[0];
      const hasTitleError = errors?.title?._errors.length;
      console.error('Validation errors:', errors);
      const questionsError = errors.questions?._errors[0];
      if (questionsError) {
        alert(questionsError);
        return;
      }
      if (hasTitleError) {
        scrollRefs.current[SCROLL_REF_IDS.FORM_TITLE]?.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
        });
        return;
      }
      if (firstErrorFieldId) {
        handleScrollTo(Number(firstErrorFieldId));
      }
    }
  };
  const handleReorderQuestions = (newOrder: ApplyFormField[]) => {
    setQeustionsData((prev) => ({
      ...prev,
      questions: newOrder,
    }));
  };

  const { barPosition } = useFollowSidebar({ initialPosition: 188 });

  // 불러올 때의 질문. 지원서가 있으면 이 질문들의 편집을 잠근다
  const originalQuestions = useMemo(
    () => new Map((data?.questions ?? []).map((question) => [question.questionId, question])),
    [data],
  );
  const hasApplicants = !!data?.hasApplicants;
  const getLock = (field: ApplyFormField) =>
    getQuestionLock(
      field.questionId ? originalQuestions.get(field.questionId) : undefined,
      hasApplicants,
    );

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
        {hasApplicants && (
          <p className={S.lockNotice}>
            지원서가 제출된 폼이라 기존 질문은 삭제하거나 유형을 바꿀 수 없어요.
          </p>
        )}
        <QueryErrorBoundary>
          <QuestionForm
            formData={questionsData}
            errors={errors}
            isSubmit={isSubmit}
            handleQuestionTypeChange={handleQuestionTypeChange}
            handleAddField={handleAddField}
            handleUpdateField={handleUpdateField}
            handleDeleteField={handleDeleteField}
            handleAddFieldBelow={handleAddFieldBelow}
            handleEssentialChange={handleEssentialChange}
            handleOptionChange={handleOptionChange}
            handleOptionAdd={handleOptionAdd}
            handleOptionDelete={handleOptionDelete}
            handleChangeTitle={handleChangeTitle}
            handleChangeSubTitle={handleChangeSubTitle}
            handleReorderQuestions={handleReorderQuestions}
            scrollRefs={scrollRefs}
            getLock={getLock}
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
