'use client';
import Indicator from '../indicator';
import RecommendTemplate from './recommend/Template';
import * as S from './step3.css';
import QuestionForm from '../../questionForm';
import { useApplicationForm } from '@/hooks/useApplicationForm';
import QuestionNavigator from '../../questionNavigator';
import Button from '@/common/ui/button';
import { useCreateFormMutation } from '@/hooks/useCreateFormMutation';
import { useApplicationFormValidation } from '@/hooks/useApplicationFormVaildation';
import { useRef, useState } from 'react';
import { useAuthStore } from '@/common/store/adminAuthStore';
import { ApplyFormField } from '@/common/model/applicationForm';

function FormQuestionStep() {
  const { profile } = useAuthStore();
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
  const [isSubmit, setIsSubmit] = useState(false);
  const { handleCreateForm } = useCreateFormMutation();
  const { result, errors } = useApplicationFormValidation(questionsData);
  const scrollRefs = useRef<HTMLDivElement[]>([]);

  const handleScrollTo = (index: number) => {
    const target = scrollRefs.current[index];
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleReorderQuestions = (newOrder: ApplyFormField[]) => {
    setQeustionsData((prev) => ({
      ...prev,
      questions: newOrder,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmit(true);
    const mergedFormData = {
      ...previousStepData,
      ...questionsData,
    };

    if (result.success) {
      handleCreateForm(profile!.clubId, mergedFormData);
    }
    if (errors) {
      console.error('Validation errors:', errors);
    }
  };
  return (
    <form className={S.container} onSubmit={(e) => handleSubmit(e)}>
      <Indicator step={3} />
      <RecommendTemplate handleAddField={handleAddField} />
      <QuestionForm
        formData={questionsData}
        errors={errors}
        isSubmit={isSubmit}
        handleQuestionTypeChange={handleQuestionTypeChange}
        handleAddField={handleAddField}
        handleUpdateField={handleUpdateField}
        scrollRefs={scrollRefs}
        handleDeleteField={handleDeleteField}
        handleEssentialChange={handleEssentialChange}
        handleOptionChange={handleOptionChange}
        handleOptionAdd={handleOptionAdd}
        handleOptionDelete={handleOptionDelete}
        handleChangeTitle={handleChangeTitle}
        handleChangeSubTitle={handleChangeSubTitle}
        handleReorderQuestions={handleReorderQuestions}
      />
      <div className={S.navigatorContainer}>
        <QuestionNavigator fields={questionsData.questions} handleScrollTo={handleScrollTo} />
        <Button type="submit" variant="primary" className={S.submitButton}>
          제작 완료 및 업로드
        </Button>
      </div>
    </form>
  );
}

export default FormQuestionStep;
