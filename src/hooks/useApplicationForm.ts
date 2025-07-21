import { ApplicationForm, ApplyFormField, QuestionType } from '@/common/model/applicationForm';
import { loadFromSession } from '@/common/util/sessionStorageUtil';
import { useState } from 'react';

export const useApplicationForm = () => {
  const [formData, setFormData] = useState<ApplicationForm>({
    hasInterview: loadFromSession('hasInterview') ?? false,
    recruitStartDate: loadFromSession('recruitStartDate') ?? '',
    recruitEndDate: loadFromSession('recruitEndDate') ?? '',
    applicableGrades: loadFromSession('applicableGrades') ?? [],
    maxApplyCount: loadFromSession('maxApplyCount') ?? 0,
    interviewStartDate: {
      present: true,
    },
    interviewEndDate: {
      present: true,
    },
    title: '',
    subTitle: '',

    applyForm: [
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
    setFormData((prev) => {
      const newApplyForm = [...prev.applyForm];
      newApplyForm[fieldId].questionType = type;
      return { ...prev, applyForm: newApplyForm };
    });
  };

  const handleAddField = ({ newField }: { newField?: ApplyFormField } = {}) => {
    if (newField) {
      setFormData((prev) => ({
        ...prev,
        applyForm: [...prev.applyForm, newField],
      }));
      return;
    }

    const newBaseField = {
      title: '',
      subTitle: '',
      questionType: 'SHORT_ANSWER' as QuestionType,
      isEssential: false,
      content: [''],
    };

    setFormData((prev) => ({
      ...prev,
      applyForm: [...prev.applyForm, newBaseField],
    }));
  };

  const handleUpdateField = (fieldId: number, updatedField: ApplyFormField) => {
    setFormData((prev) => {
      const newApplyForm = [...prev.applyForm];
      newApplyForm[fieldId] = updatedField;
      return { ...prev, applyForm: newApplyForm };
    });
  };

  const handleDeleteField = (fieldId: number) => {
    setFormData((prev) => {
      const newApplyForm = prev.applyForm.filter((_, index) => index !== fieldId);
      return { ...prev, applyForm: newApplyForm };
    });
  };

  const handleEssentialChange = (fieldId: number, isEssential: boolean) => {
    setFormData((prev) => {
      const newApplyForm = [...prev.applyForm];
      newApplyForm[fieldId].isEssential = isEssential;
      return { ...prev, applyForm: newApplyForm };
    });
  };

  const handleOptionChange = (fieldId: number, optionIndex: number, value: string) => {
    setFormData((prev) => {
      const newApplyForm = [...prev.applyForm];
      const field = newApplyForm[fieldId];
      if (field.content) {
        field.content[optionIndex] = value;
      } else {
        field.content = [value];
      }
      return { ...prev, applyForm: newApplyForm };
    });
  };

  const handleOptionAdd = (fieldId: number) => {
    setFormData((prev) => {
      const newApplyForm = prev.applyForm.map((field, index) => {
        if (index === fieldId) {
          return {
            ...field,
            content: [...field.content, ''],
          };
        }
        return field;
      });
      return { ...prev, applyForm: newApplyForm };
    });
  };

  const handleOptionDelete = (fieldId: number, optionIndex: number) => {
    setFormData((prev) => {
      const newApplyForm = prev.applyForm.map((field, index) => {
        if (index === fieldId) {
          return {
            ...field,
            content: field.content.filter((_, i) => i !== optionIndex),
          };
        }
        return field;
      });
      return { ...prev, applyForm: newApplyForm };
    });
  };

  const handleChangeTitle = (title: string) => {
    setFormData((prev) => ({ ...prev, title }));
  };

  const handleChangeSubTitle = (subTitle: string) => {
    setFormData((prev) => ({ ...prev, subTitle }));
  };

  return {
    formData,
    setFormData,
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
