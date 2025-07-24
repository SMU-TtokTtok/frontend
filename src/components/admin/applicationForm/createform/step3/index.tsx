'use client';
import Indicator from '../indicator';
import RecommendTemplate from './recommend/Template';
import * as S from './step3.css';
import QuestionForm from './questionForm';
import { useApplicationForm } from '@/hooks/useApplicationForm';
import QuestionNavigator from './questionNavigator';
import Button from '@/common/ui/button';
import { useCreateFormMutation } from '@/hooks/useCreateFormMutation';
import { useApplicationFormValidation } from '@/hooks/useApplicationFormVaildation';
import { useState } from 'react';

function FormQuestionStep() {
  const {
    questionsData,
    previousStepData,
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
  const [isSubmit, setIsSubmit] = useState(false);
  const { handleCreateForm } = useCreateFormMutation();
  const { result, errors } = useApplicationFormValidation(questionsData);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmit(true);

    const mergedFormData = {
      ...previousStepData,
      ...questionsData,
    };

    if (result.success) {
      handleCreateForm(mergedFormData);
    }
    if (errors) {
      console.error('Validation errors:', errors);
    }
  };
  return (
    <>
      <RecommendTemplate handleAddField={handleAddField} />
      <form className={S.container} onSubmit={(e) => handleSubmit(e)}>
        <Indicator step={3} />
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
            제작 완료 및 업로드
          </Button>
        </div>
      </form>
    </>
  );
}

export default FormQuestionStep;
