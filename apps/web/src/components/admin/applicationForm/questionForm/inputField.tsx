import React from 'react';
import * as S from './questionFrom.css';
import DropDown from '@/common/components/dropdown';
import DropDownButton from '@/common/ui/dropdownButton';
import Checkbox from '@/common/ui/checkbox';
import Image from 'next/image';
import { questionTypes } from './index';
import check from '@/assets/check_radio.svg';
import moreVert from '@/assets/more_vert.svg';
import { QuestionStepForm, ApplyFormField, QuestionType } from '@/common/model/applicationForm';
import { convertToKor } from '@/common/util/convertToKor';
import { ZodFormattedError } from 'zod';
interface InputFieldProps {
  fieldId: string;
  fieldIndex: number;
  field: ApplyFormField;
  errors?: ZodFormattedError<QuestionStepForm>;
  isSubmit?: boolean;
  scrollRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
  handleQuestionTypeChange: (type: QuestionType) => void;
  handleUpdateField: (fieldId: string, data: ApplyFormField) => void;
  handleDeleteField: (fieldId: string) => void;
  handleAddFieldBelow: (fieldId: string) => void;
  handleEssentialChange: (fieldId: string, isEssential: boolean) => void;
}

function InputField({
  fieldId,
  fieldIndex,
  field,
  errors,
  isSubmit,
  scrollRefs,
  handleQuestionTypeChange,
  handleUpdateField,
  handleDeleteField,
  handleAddFieldBelow,
  handleEssentialChange,
}: InputFieldProps) {
  const titleErrorMessage = errors?.questions?.[fieldIndex]?.title?._errors[0];
  const hasTitleError = !!(isSubmit && titleErrorMessage);
  const titleErrorId = `question-title-error-${fieldId}`;

  return (
    <div
      ref={(el) => {
        if (el) {
          scrollRefs.current[fieldId] = el as HTMLDivElement;
        } else {
          scrollRefs.current[fieldId] = null;
        }
      }}
    >
      <div className={S.fieldToolBar}>
        <DropDown
          toggleButton={
            <DropDownButton variant="form" className={S.dropDownButton}>
              {convertToKor(field.questionType)}
            </DropDownButton>
          }
        >
          <ul className={S.dropDownList}>
            {questionTypes.map((item) => (
              <li
                key={item.type}
                className={S.dropDownListItem}
                onClick={() => handleQuestionTypeChange(item.type as QuestionType)}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </DropDown>
        <div className={S.optionContainer}>
          <Checkbox
            variant="primary"
            className={S.essentialCheckbox}
            label="필수 질문"
            img={check}
            imgSize={S.checkImg}
            defaultChecked={field.isEssential}
            onChange={(e) => handleEssentialChange(fieldId, e.target.checked)}
          />
          <span className={S.horizonLine} />
          <DropDown
            toggleButton={
              <Image src={moreVert} alt="항목 옵션 더보기" className={S.fieldOptionButton} />
            }
            panelClassName={S.fieldOptionList}
          >
            <li className={S.fieldOptionItem} onClick={() => handleAddFieldBelow(fieldId)}>
              아래에 질문 추가
            </li>
            <li
              className={`${S.fieldOptionItem} ${S.fieldOptionItemDelete}`}
              onClick={() => handleDeleteField(fieldId)}
            >
              삭제
            </li>
          </DropDown>
        </div>
      </div>

      <div className={S.titleContainer({ title: 'questionTitle' })}>
        <input
          className={S.questionTitle({ isError: hasTitleError })}
          placeholder="질문 제목을 입력해주세요.(필수)"
          value={field.title}
          aria-invalid={hasTitleError}
          aria-describedby={hasTitleError ? titleErrorId : undefined}
          onChange={(e) => {
            const newField = { ...field, title: e.target.value };
            handleUpdateField(fieldId, newField);
          }}
        />
        {hasTitleError && (
          <span id={titleErrorId} className={S.visuallyHidden}>
            {titleErrorMessage}
          </span>
        )}
      </div>

      <textarea
        className={S.questionDescription}
        placeholder="질문에 대한 설명을 작성해주세요.(선택)"
        value={field.subTitle}
        onChange={(e) => {
          const newField = { ...field, subTitle: e.target.value };
          handleUpdateField(fieldId, newField);
        }}
      />

      <input className={S.previewFeild} disabled placeholder="단답형 텍스트" />
    </div>
  );
}

export default InputField;
