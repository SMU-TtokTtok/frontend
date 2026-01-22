import { QuestionStepForm, ApplyFormField, QuestionType } from '@/common/model/applicationForm';
import InputField from './inputField';
import TextAreaField from './textAreaField';
import CheckboxField from './checkboxField';
import RadioField from './radioField';
import { ZodFormattedError } from 'zod';
import FileField from './fileField';

interface FormFieldFactoryProps {
  field: ApplyFormField;
  scrollRefs: React.RefObject<HTMLDivElement[]>;
  fieldId: number;
  errors?: ZodFormattedError<QuestionStepForm>;
  isSubmit?: boolean;
  handleQuestionTypeChange: (type: QuestionType) => void;
  handleUpdateField: (fieldId: number, data: ApplyFormField) => void;
  handleDeleteField: (fieldId: number) => void;
  handleEssentialChange: (fieldId: number, isEssential: boolean) => void;
  handleOptionChange: (fieldId: number, optionIndex: number, value: string) => void;
  handleOptionAdd: (fieldId: number) => void;
  handleOptionDelete: (fieldId: number, optionIndex: number) => void;
}

function FormFieldFactory({
  fieldId,
  field,
  scrollRefs,
  errors,
  isSubmit,
  handleQuestionTypeChange,
  handleUpdateField,
  handleDeleteField,
  handleEssentialChange,
  handleOptionChange,
  handleOptionAdd,
  handleOptionDelete,
}: FormFieldFactoryProps) {
  switch (field.questionType) {
    case 'LONG_ANSWER':
      return (
        <TextAreaField
          fieldId={fieldId}
          field={field}
          scrollRefs={scrollRefs}
          errors={errors}
          isSubmit={isSubmit}
          handleQuestionTypeChange={handleQuestionTypeChange}
          handleUpdateField={handleUpdateField}
          handleDeleteField={handleDeleteField}
          handleEssentialChange={handleEssentialChange}
        />
      );
    case 'SHORT_ANSWER':
      return (
        <InputField
          fieldId={fieldId}
          field={field}
          scrollRefs={scrollRefs}
          errors={errors}
          isSubmit={isSubmit}
          handleQuestionTypeChange={handleQuestionTypeChange}
          handleUpdateField={handleUpdateField}
          handleDeleteField={handleDeleteField}
          handleEssentialChange={handleEssentialChange}
        />
      );
    case 'CHECKBOX':
      return (
        <CheckboxField
          fieldId={fieldId}
          field={field}
          scrollRefs={scrollRefs}
          errors={errors}
          isSubmit={isSubmit}
          handleQuestionTypeChange={handleQuestionTypeChange}
          handleUpdateField={handleUpdateField}
          handleDeleteField={handleDeleteField}
          handleEssentialChange={handleEssentialChange}
          handleOptionChange={handleOptionChange}
          handleOptionAdd={handleOptionAdd}
          handleOptionDelete={handleOptionDelete}
        />
      );

    case 'RADIO':
      return (
        <RadioField
          fieldId={fieldId}
          field={field}
          scrollRefs={scrollRefs}
          errors={errors}
          isSubmit={isSubmit}
          handleQuestionTypeChange={handleQuestionTypeChange}
          handleUpdateField={handleUpdateField}
          handleDeleteField={handleDeleteField}
          handleEssentialChange={handleEssentialChange}
          handleOptionChange={handleOptionChange}
          handleOptionAdd={handleOptionAdd}
          handleOptionDelete={handleOptionDelete}
        />
      );

    case 'FILE':
      return (
        <FileField
          fieldId={fieldId}
          field={field}
          errors={errors}
          isSubmit={isSubmit}
          scrollRefs={scrollRefs}
          handleQuestionTypeChange={handleQuestionTypeChange}
          handleUpdateField={handleUpdateField}
          handleDeleteField={handleDeleteField}
          handleEssentialChange={handleEssentialChange}
        />
      );
  }
}

export default FormFieldFactory;
