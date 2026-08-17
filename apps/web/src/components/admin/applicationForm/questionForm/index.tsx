import Image from 'next/image';
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';
import * as S from './questionFrom.css';
import AddFeild from '@/assets/add_circle.svg';
import FormFieldFactory from './questionFactory';
import ApplicantInfoField from './applicantInfoField/applicantInfoField';
import { QuestionStepForm, ApplyFormField, QuestionType } from '@/common/model/applicationForm';
import { ZodFormattedError } from 'zod';
import SortableFieldWrapper from './sortableFieldWrapper';
import { SCROLL_REF_IDS } from '../constants';
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
  handleQuestionTypeChange: (type: QuestionType, index: string) => void;
  handleUpdateField: (fieldId: string, data: ApplyFormField) => void;
  handleDeleteField: (fieldId: string) => void;
  handleAddFieldBelow: (fieldId: string) => void;
  handleEssentialChange: (fieldId: string, isEssential: boolean) => void;
  handleOptionChange: (fieldId: string, optionIndex: number, value: string) => void;
  handleOptionAdd: (fieldId: string) => void;
  handleOptionDelete: (fieldId: string, optionIndex: number) => void;
  handleReorderQuestions: (newOrder: ApplyFormField[]) => void;
  scrollRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
  hasRecommendTemplateSpacing?: boolean;
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
  handleAddFieldBelow,
  handleEssentialChange,
  handleOptionChange,
  handleOptionAdd,
  handleOptionDelete,
  handleReorderQuestions,
  scrollRefs,
  hasRecommendTemplateSpacing = false,
}: QuestionFormProps) {
  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = formData.questions.findIndex((_, idx) => idx === Number(active.id));
    const newIndex = formData.questions.findIndex((_, idx) => idx === Number(over.id));

    const newQuestions = arrayMove(formData.questions, oldIndex, newIndex);
    handleReorderQuestions(newQuestions);
  };

  const titleErrorMessage = errors?.title?._errors[0];
  const hasTitleError = !!(isSubmit && titleErrorMessage);
  const titleErrorId = 'form-title-error';

  return (
    <div className={S.container}>
      <div className={S.header}>
        <div
          ref={(el) => {
            if (el) {
              scrollRefs.current[SCROLL_REF_IDS.FORM_TITLE] = el as HTMLDivElement;
            } else {
              scrollRefs.current[SCROLL_REF_IDS.FORM_TITLE] = null;
            }
          }}
          className={S.titleContainer({ title: 'formTitle' })}
        >
          <input
            className={S.title({ isError: hasTitleError })}
            value={formData.title ?? ''}
            onChange={(e) => handleChangeTitle(e.target.value)}
            placeholder="지원폼 제목을 입력해주세요.(필수)"
            aria-invalid={hasTitleError}
            aria-describedby={hasTitleError ? titleErrorId : undefined}
          />
          {hasTitleError && (
            <span id={titleErrorId} className={S.visuallyHidden}>
              {titleErrorMessage}
            </span>
          )}
        </div>

        <textarea
          className={S.description}
          value={formData.subTitle ?? ''}
          onChange={(e) => handleChangeSubTitle(e.target.value)}
          placeholder="동아리에 대한 한줄 소개를 해주세요.(선택)"
        />
      </div>
      <ApplicantInfoField hasRecommendTemplateSpacing={hasRecommendTemplateSpacing} />
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          items={formData.questions.map((_, index) => index.toString())}
          strategy={verticalListSortingStrategy}
        >
          {formData?.questions?.map((field, index) => (
            <SortableFieldWrapper key={index} id={index.toString()}>
              <FormFieldFactory
                key={index}
                fieldId={field.questionId || index.toString()}
                fieldIndex={index}
                scrollRefs={scrollRefs}
                field={field}
                errors={errors}
                isSubmit={isSubmit}
                handleUpdateField={handleUpdateField}
                handleDeleteField={handleDeleteField}
                handleAddFieldBelow={handleAddFieldBelow}
                handleEssentialChange={handleEssentialChange}
                handleOptionChange={handleOptionChange}
                handleOptionAdd={handleOptionAdd}
                handleOptionDelete={handleOptionDelete}
                handleQuestionTypeChange={(type) =>
                  handleQuestionTypeChange(type, field.questionId || index.toString())
                }
              />
            </SortableFieldWrapper>
          ))}
        </SortableContext>
      </DndContext>

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
