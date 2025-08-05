import Image from 'next/image';
import * as S from './questionFrom.css';
import AddFeild from '@/assets/add_circle.svg';
import FormFieldFactory from './questionFactory';
import ApplicantInfoField from './applicantInfoField/applicantInfoField';
import { QuestionStepForm, ApplyFormField, QuestionType } from '@/common/model/applicationForm';
import { ZodFormattedError } from 'zod';
export const questionTypes = [
  { type: 'SHORT_ANSWER', label: '단답형' },
  { type: 'LONG_ANSWER', label: '서술형' },
  { type: 'RADIO', label: '객관식' },
  { type: 'CHECKBOX', label: '체크박스' },
  { type: 'FILE', label: '파일' },
];

interface QuestionFormProps {
  formData: QuestionStepForm;
  errors?: ZodFormattedError<QuestionStepForm>;
  isSubmit?: boolean;
  handleChangeTitle: (title: string) => void;
  handleChangeSubTitle: (subTitle: string) => void;
  handleAddField: () => void;
  handleQuestionTypeChange: (type: QuestionType, index: number) => void;
  handleUpdateField: (fieldId: number, data: ApplyFormField) => void;
  handleDeleteField: (fieldId: number) => void;
  handleEssentialChange: (fieldId: number, isEssential: boolean) => void;
  handleOptionChange: (fieldId: number, optionIndex: number, value: string) => void;
  handleOptionAdd: (fieldId: number) => void;
  handleOptionDelete: (fieldId: number, optionIndex: number) => void;
  scrollRefs: React.RefObject<HTMLDivElement[]>;
}

function QuestionForm({
  formData,
  errors,
  isSubmit,
  handleChangeTitle,
  handleChangeSubTitle,
  handleAddField,
  handleQuestionTypeChange,
  handleUpdateField,
  handleDeleteField,
  handleEssentialChange,
  handleOptionChange,
  handleOptionAdd,
  handleOptionDelete,
  scrollRefs,
}: QuestionFormProps) {
  return (
    <div className={S.container}>
      <div className={S.header}>
        <div className={S.titleContainer({ title: 'formTitle' })}>
          <input
            className={S.title}
            value={formData.title ?? ''}
            onChange={(e) => handleChangeTitle(e.target.value)}
            placeholder="지원폼 제목을 입력해주세요."
          />
          {isSubmit && errors && (
            <span className={S.errorMessage}>{errors?.title?._errors[0]}</span>
          )}
        </div>

        <textarea
          className={S.description}
          value={formData.subTitle ?? ''}
          onChange={(e) => handleChangeSubTitle(e.target.value)}
          placeholder="동아리에 대한 간략한 소개를 해주세요.(선택)"
        />
      </div>
      <ApplicantInfoField />
      {formData?.questions?.map((field, index) => (
        <FormFieldFactory
          key={index}
          fieldId={index}
          scrollRefs={scrollRefs}
          field={field}
          errors={errors}
          isSubmit={isSubmit}
          handleUpdateField={handleUpdateField}
          handleDeleteField={handleDeleteField}
          handleEssentialChange={handleEssentialChange}
          handleOptionChange={handleOptionChange}
          handleOptionAdd={handleOptionAdd}
          handleOptionDelete={handleOptionDelete}
          handleQuestionTypeChange={(type) => handleQuestionTypeChange(type, index)}
        />
      ))}
      <div className={S.addFieldButton}>
        <Image
          src={AddFeild}
          alt="항목 추가하기"
          className={S.fieldAddButton}
          onClick={() => handleAddField()}
        />
      </div>
    </div>
  );
}

export default QuestionForm;
