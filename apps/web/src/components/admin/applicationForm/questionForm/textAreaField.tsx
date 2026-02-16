import React from 'react';
import * as S from './questionFrom.css';
import DropDown from '@/common/components/dropdown';
import DropDownButton from '@/common/ui/dropdownButton';
import Checkbox from '@/common/ui/checkbox';
import Image from 'next/image';
import Delete from '@/assets/delete.svg';
import check from '@/assets/check_radio.svg';
import { questionTypes } from './index';

import { QuestionStepForm, ApplyFormField, QuestionType } from '@/common/model/applicationForm';
import { convertToKor } from '@/common/util/convertToKor';
import { ZodFormattedError } from 'zod';
interface InputFieldProps {
  fieldId: string;
  fieldIndex: number;
  field: ApplyFormField;
  scrollRefs: React.MutableRefObject<Record<string, HTMLDivElement | null>>;
  errors?: ZodFormattedError<QuestionStepForm>;
  isSubmit?: boolean;
  handleQuestionTypeChange: (type: QuestionType) => void;
  handleUpdateField: (fieldId: string, data: ApplyFormField) => void;
  handleDeleteField: (fieldId: string) => void;
  handleEssentialChange: (fieldId: string, isEssential: boolean) => void;
}

function TextAreaField({
  fieldId,
  fieldIndex,
  field,
  errors,
  isSubmit,
  handleQuestionTypeChange,
  handleUpdateField,
  handleDeleteField,
  handleEssentialChange,
  scrollRefs,
}: InputFieldProps) {
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
          <Image
            src={Delete}
            alt="항목 삭제하기"
            className={S.deleteButton}
            onClick={() => handleDeleteField(fieldId)}
          />
        </div>
      </div>

      <div className={S.titleContainer({ title: 'questionTitle' })}>
        <input
          className={S.questionTitle}
          placeholder="질문 제목을 입력해주세요."
          value={field.title}
          onChange={(e) => {
            const newField = { ...field, title: e.target.value };
            handleUpdateField(fieldId, newField);
          }}
        />
        {errors && isSubmit && (
          <span className={S.errorMessage}>{errors.questions?.[fieldIndex]?.title?._errors}</span>
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

      <textarea className={S.previewFeild} disabled placeholder="서술형 텍스트" />
    </div>
  );
}

export default TextAreaField;
