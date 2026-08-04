import {
  QuestionStepForm,
  ApplyFormField,
  PreviousStepForm,
  QuestionType,
} from '@/common/model/applicationForm';
import { loadFromSession } from '@/common/util/sessionStorageUtil';
import { useState } from 'react';

const generateTempId = () => `temp-${Date.now()}-${Math.random()}`;
const isSameField = (field: ApplyFormField, index: number, fieldId: string) =>
  field.questionId === fieldId || (!field.questionId && index.toString() === fieldId);

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
    setQeustionsData((prev) => {
      const newQuestions = prev.questions.map((q, index) =>
        isSameField(q, index, fieldId) ? { ...q, questionType: type } : q,
      );
      return { ...prev, questions: newQuestions };
    });
  };

  const handleAddField = ({ newField }: { newField?: ApplyFormField } = {}) => {
    if (newField) {
      setQeustionsData((prev) => ({
        ...prev,
        questions: [
          ...prev.questions,
          { ...newField, questionId: newField.questionId ?? generateTempId() },
        ],
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
      const newQuestions = prev.questions.map((q, index) =>
        isSameField(q, index, fieldId)
          ? { ...updatedField, questionId: updatedField.questionId ?? q.questionId }
          : q,
      );
      return { ...prev, questions: newQuestions };
    });
  };

  const handleDeleteField = (fieldId: string) => {
    setQeustionsData((prev) => {
      const newQuestions = prev.questions.filter(
        (field, index) => !isSameField(field, index, fieldId),
      );
      return { ...prev, questions: newQuestions };
    });
  };

  const handleEssentialChange = (fieldId: string, isEssential: boolean) => {
    setQeustionsData((prev) => {
      const newQuestions = prev.questions.map((q, index) =>
        isSameField(q, index, fieldId) ? { ...q, isEssential } : q,
      );
      return { ...prev, questions: newQuestions };
    });
  };

  const handleOptionChange = (fieldId: string, optionIndex: number, value: string) => {
    setQeustionsData((prev) => {
      const newQuestions = prev.questions.map((field, index) => {
        if (!isSameField(field, index, fieldId)) return field;

        const content = field.content ? [...field.content] : [''];
        content[optionIndex] = value;
        return { ...field, content };
      });
      return { ...prev, questions: newQuestions };
    });
  };

  const handleOptionAdd = (fieldId: string) => {
    setQeustionsData((prev) => {
      const newQuestions = prev.questions.map((field, index) => {
        if (isSameField(field, index, fieldId)) {
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
        if (isSameField(field, index, fieldId)) {
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
