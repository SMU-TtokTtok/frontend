import {
  QuestionStepForm,
  ApplyFormField,
  PreviousStepForm,
  QuestionType,
} from '@/common/model/applicationForm';
import { loadFromSession } from '@/common/util/sessionStorageUtil';
import { useState } from 'react';

const generateTempId = () => `temp-${Date.now()}-${Math.random()}`;

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

  const [questionsData, setQeustionsData] = useState<QuestionStepForm>(() => ({
    title: '',
    subTitle: '',

    questions: [
      {
        questionId: generateTempId(),
        title: '',
        subTitle: '',
        questionType: 'SHORT_ANSWER' as QuestionType,
        isEssential: false,
        content: [''],
      },
    ],
  }));

  const handleQuestionTypeChange = (type: QuestionType, fieldId: string) => {
    console.log('handleQuestionTypeChange', type, fieldId);
    setQeustionsData((prev) => {
      const newQuestions = [...prev.questions];
      const findQuestion = newQuestions.find((q) => q.questionId === fieldId);
      if (findQuestion) {
        findQuestion.questionType = type;
      }
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
      questionId: generateTempId(),
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

  const handleUpdateField = (fieldId: string, updatedField: ApplyFormField) => {
    setQeustionsData((prev) => {
      const newQuestions = [...prev.questions];
      const matchIndex = newQuestions.findIndex((q) => q.questionId === updatedField.questionId);
      newQuestions[matchIndex] = updatedField;
      return { ...prev, questions: newQuestions };
    });
  };

  const handleDeleteField = (fieldId: string) => {
    setQeustionsData((prev) => {
      const newQuestions = prev.questions.filter((field) => field.questionId !== fieldId);
      return { ...prev, questions: newQuestions };
    });
  };

  const handleEssentialChange = (fieldId: string, isEssential: boolean) => {
    setQeustionsData((prev) => {
      const newQuestions = [...prev.questions];
      const findQuestion = newQuestions.find((q) => q.questionId === fieldId);
      if (findQuestion) {
        findQuestion.isEssential = isEssential;
      }
      return { ...prev, questions: newQuestions };
    });
  };

  const handleOptionChange = (fieldId: string, optionIndex: number, value: string) => {
    setQeustionsData((prev) => {
      const newQuestions = [...prev.questions];
      const field = newQuestions.find((q) => q.questionId === fieldId);
      if (!field) return prev;
      if (field.content) {
        field.content[optionIndex] = value;
      } else {
        field.content = [value];
      }
      return { ...prev, questions: newQuestions };
    });
  };

  const handleOptionAdd = (fieldId: string) => {
    setQeustionsData((prev) => {
      const newQuestions = prev.questions.map((field, index) => {
        if (field.questionId === fieldId) {
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

  const handleOptionDelete = (fieldId: string, optionIndex: number) => {
    setQeustionsData((prev) => {
      const newQuestions = prev.questions.map((field, index) => {
        if (field.questionId === fieldId) {
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
