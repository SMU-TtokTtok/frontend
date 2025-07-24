'use client';
import { useAdminForm } from '@/hooks/useAdminForm';
import * as S from './applicationForm.css';
import EmptyPage from './emptyPage';
import { useApplicationForm } from '@/hooks/useApplicationForm';
import { useEffect, useState } from 'react';
import QuestionForm from './createform/step3/questionForm';
import { useApplicationFormValidation } from '@/hooks/useApplicationFormVaildation';
import QuestionNavigator from './createform/step3/questionNavigator';
import Button from '@/common/ui/button';
import { useUpdateFormMutation } from '@/hooks/useAdminFormMutation';
import ConfirmModal from '@/common/components/confirmModal';
import { useModal } from '@/hooks/useModal';

function ApplicationFormPage() {
  const { data } = useAdminForm(1);

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

  useEffect(() => {
    setQeustionsData(data);
  }, []);

  const isEmpty = !mergeFormData || !(Object.keys(data).length > 0);

  if (isEmpty) {
    return <EmptyPage />;
  }

  return (
    <>
      <form className={S.formContainer} onSubmit={handleSubmit}>
        <h3 className={S.title}>📋 지원폼 관리</h3>
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
        />
        <div className={S.navigatorContainer}>
          <QuestionNavigator fields={questionsData.questions} />
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
