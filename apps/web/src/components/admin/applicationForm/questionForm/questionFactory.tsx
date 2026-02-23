import { QuestionStepForm, ApplyFormField, QuestionType } from '@/common/model/applicationForm';
import InputField from './inputField';
import TextAreaField from './textAreaField';
import CheckboxField from './checkboxField';
import RadioField from './radioField';
import { ZodFormattedError } from 'zod';
import FileField from './fileField';

interface FormFieldFactoryProps {
  field: ApplyFormField;
  scrollRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
  fieldId: string;
  fieldIndex: number;
  errors?: ZodFormattedError<QuestionStepForm>;
  isSubmit?: boolean;
  handleQuestionTypeChange: (type: QuestionType) => void;
  handleUpdateField: (fieldId: string, data: ApplyFormField) => void;
  handleDeleteField: (fieldId: string) => void;
  handleEssentialChange: (fieldId: string, isEssential: boolean) => void;
  handleOptionChange: (fieldId: string, optionIndex: number, value: string) => void;
  handleOptionAdd: (fieldId: string) => void;
  handleOptionDelete: (fieldId: string, optionIndex: number) => void;
}

function FormFieldFactory({
  fieldId,
  fieldIndex,
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
          fieldIndex={fieldIndex}
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
          fieldIndex={fieldIndex}
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
          fieldIndex={fieldIndex}
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
          fieldIndex={fieldIndex}
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
          fieldIndex={fieldIndex}
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
