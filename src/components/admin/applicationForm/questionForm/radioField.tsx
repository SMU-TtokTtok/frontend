import React from 'react';
import * as S from './questionFrom.css';
import DropDown from '@/common/components/dropdown';
import DropDownButton from '@/common/ui/dropdownButton';
import Checkbox from '@/common/ui/checkbox';
import Image from 'next/image';
import check from '@/assets/check_radio.svg';
import AddFeild from '@/assets/add_circle.svg';
import Delete from '@/assets/delete.svg';
import DeleteOption from '@/assets/option_delete.svg';
import { questionTypes } from './index';

import { QuestionStepForm, ApplyFormField, QuestionType } from '@/common/model/applicationForm';
import { convertToKor } from '@/common/util/convertToKor';
import { ZodFormattedError } from 'zod';
interface InputFieldProps {
  fieldId: number;
  field: ApplyFormField;
  scrollRefs: React.RefObject<HTMLDivElement[]>;
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

function RadioField({
  fieldId,
  field,
  errors,
  isSubmit,
  scrollRefs,
  handleQuestionTypeChange,
  handleUpdateField,
  handleDeleteField,
  handleEssentialChange,
  handleOptionChange,
  handleOptionAdd,
  handleOptionDelete,
}: InputFieldProps) {
  return (
    <div
      className={S.formFeildBlock}
      ref={(el) => {
        if (el) scrollRefs.current[fieldId] = el as HTMLDivElement;
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
          <span className={S.errorMessage}>{errors.questions?.[fieldId]?.title?._errors}</span>
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
      <div className={S.fieldRadioOptions}>
        {field.content.map((option, index) => (
          <div key={index}>
            <div className={S.radioOption}>
              <input
                type="radio"
                name={`radio-${fieldId}`}
                id={`radio-${fieldId}-${index}`}
                className={S.radio}
                readOnly
                disabled
              />
              <input
                type="text"
                placeholder="선택지"
                className={S.radioOptionInput}
                value={option}
                onChange={(e) => handleOptionChange(fieldId, index, e.target.value)}
              />
              <Image
                src={DeleteOption}
                alt="선택지 삭제하기"
                className={S.deleteOptionButton}
                onClick={() => handleOptionDelete(fieldId, index)}
              />
            </div>
            {errors && isSubmit && (
              <span className={S.errorMessage}>
                {errors.questions?.[fieldId]?.content?.[index]?._errors}
              </span>
            )}
          </div>
        ))}
      </div>
      <Image
        src={AddFeild}
        className={S.addOptionButton}
        alt="항목 추가하기"
        onClick={() => handleOptionAdd(fieldId)}
      />
    </div>
  );
}

export default RadioField;
