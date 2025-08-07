import {
  QuestionStepForm,
  ApplyFormField,
  PreviousStepForm,
  QuestionType,
} from '@/common/model/applicationForm';
import { loadFromSession } from '@/common/util/sessionStorageUtil';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const useApplicationForm = () => {
  const previousStepData: PreviousStepForm = {
    hasInterview: loadFromSession('hasInterview') ?? false,
    recruitStartDate: loadFromSession('recruitStartDate') ?? '',
    recruitEndDate: loadFromSession('recruitEndDate') ?? '',
    applicableGrades: loadFromSession('applicableGrades') ?? [],
    maxApplyCount: loadFromSession('maxApplyCount') ?? 0,
    interviewStartDate: loadFromSession('interviewStartDate') ?? null,
    interviewEndDate: loadFromSession('interviewEndDate') ?? null,
  };

  const [questionsData, setQeustionsData] = useState<QuestionStepForm>({
    title: '',
    subTitle: '',

    questions: [
      {
        title: '',
        subTitle: '',
        questionType: 'SHORT_ANSWER' as QuestionType,
        isEssential: false,
        content: [''],
      },
    ],
  });

  const handleQuestionTypeChange = (type: QuestionType, fieldId: number) => {
    setQeustionsData((prev) => {
      const newQuestions = [...prev.questions];
      newQuestions[fieldId].questionType = type;
      return { ...prev, questions: newQuestions };
    });
  };

  const handleAddField = ({ newField }: { newField?: ApplyFormField } = {}) => {
    if (newField) {
      setQeustionsData((prev) => ({
        ...prev,
        questions: [...prev.questions, newField],
      }));
      return;
    }

    const newBaseField = {
      questionId: uuidv4(),
      title: '',
      subTitle: '',
      questionType: 'SHORT_ANSWER' as QuestionType,
      isEssential: false,
      content: [''],
    };

    setQeustionsData((prev) => ({
      ...prev,
      questions: [...prev.questions, newBaseField],
    }));
  };

  const handleUpdateField = (fieldId: number, updatedField: ApplyFormField) => {
    setQeustionsData((prev) => {
      const newQuestions = [...prev.questions];
      newQuestions[fieldId] = updatedField;
      return { ...prev, questions: newQuestions };
    });
  };

  const handleDeleteField = (fieldId: number) => {
    setQeustionsData((prev) => {
      const newQuestions = prev.questions.filter((_, index) => index !== fieldId);
      return { ...prev, questions: newQuestions };
    });
  };

  const handleEssentialChange = (fieldId: number, isEssential: boolean) => {
    setQeustionsData((prev) => {
      const newQuestions = [...prev.questions];
      newQuestions[fieldId].isEssential = isEssential;
      return { ...prev, questions: newQuestions };
    });
  };

  const handleOptionChange = (fieldId: number, optionIndex: number, value: string) => {
    setQeustionsData((prev) => {
      const newQuestions = [...prev.questions];
      const field = newQuestions[fieldId];
      if (field.content) {
        field.content[optionIndex] = value;
      } else {
        field.content = [value];
      }
      return { ...prev, questions: newQuestions };
    });
  };

  const handleOptionAdd = (fieldId: number) => {
    setQeustionsData((prev) => {
      const newQuestions = prev.questions.map((field, index) => {
        if (index === fieldId) {
          return {
            ...field,
            content: [...field.content, ''],
          };
        }
        return field;
      });
      return { ...prev, questions: newQuestions };
    });
  };

  const handleOptionDelete = (fieldId: number, optionIndex: number) => {
    setQeustionsData((prev) => {
      const newQuestions = prev.questions.map((field, index) => {
        if (index === fieldId) {
          return {
            ...field,
            content: field.content.filter((_, i) => i !== optionIndex),
          };
        }
        return field;
      });
      return { ...prev, questions: newQuestions };
    });
  };

  const handleChangeTitle = (title: string) => {
    setQeustionsData((prev) => ({ ...prev, title }));
  };

  const handleChangeSubTitle = (subTitle: string) => {
    setQeustionsData((prev) => ({ ...prev, subTitle }));
  };

  return {
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
  };
};
