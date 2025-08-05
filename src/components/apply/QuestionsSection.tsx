import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { Question } from '@/common/model/form';
import { ApplyFormData } from './schema';
import * as S from './form.css';

interface QuestionsSectionProps {
  questions: Question[];
  register: UseFormRegister<ApplyFormData>;
  errors: FieldErrors<ApplyFormData>;
}

export default function QuestionsSection({ questions, register, errors }: QuestionsSectionProps) {
  const renderQuestion = (question: Question, index: number) => {
    const error = errors.questions?.[index] as { message: string } | undefined;
    switch (question.questionType) {
      case 'CHECKBOX':
        return (
          <div key={index} className={S.questionContainer}>
            <div className={S.questionHeader}>
              <div className={S.FormContentTitle}>
                {question.title}
                {question.isEssential && <span className={S.FormContentTitleEssential}>*</span>}
              </div>
              {question.subTitle && (
                <div className={S.FormContentSubTitle}>{question.subTitle}</div>
              )}
            </div>
            <div className={S.checkboxGroup}>
              {question.content?.map((option: string, optionIndex: number) => (
                <label key={optionIndex} className={S.checkboxItem}>
                  <input
                    type="checkbox"
                    value={option}
                    {...register(`questions.${index}.value.${optionIndex}` as keyof ApplyFormData)}
                    className={S.checkboxInput}
                    required={question.isEssential && optionIndex === 0}
                    onChange={() => {
                      // 첫 번째 체크박스의 required 상태를 업데이트
                      if (question.isEssential) {
                        const checkboxes = document.querySelectorAll(
                          `input[name^="questions.${index}.value."]:checked`,
                        );
                        const firstCheckbox = document.querySelector(
                          `input[name="questions.${index}.value.0"]`,
                        ) as HTMLInputElement;
                        if (firstCheckbox) {
                          firstCheckbox.required = checkboxes.length === 0;
                        }
                      }
                    }}
                  />
                  <span className={S.checkboxLabel}>{option}</span>
                </label>
              ))}
            </div>
            {error && <span className={S.errorMessage}>{error.message}</span>}
          </div>
        );

      case 'RADIO':
        return (
          <div key={index} className={S.questionContainer}>
            <div className={S.questionHeader}>
              <div className={S.FormContentTitle}>
                {question.title}
                {question.isEssential && <span className={S.FormContentTitleEssential}>*</span>}
              </div>
              {question.subTitle && (
                <div className={S.FormContentSubTitle}>{question.subTitle}</div>
              )}
            </div>
            <div className={S.radioGroup}>
              {question.content?.map((option: string, optionIndex: number) => (
                <label key={optionIndex} className={S.radioItem}>
                  <input
                    type="radio"
                    value={option}
                    {...register(`questions.${index}.value` as keyof ApplyFormData, {
                      // required: question.isEssential,
                    })}
                    className={S.radioInput}
                    required={question.isEssential}
                  />
                  <span className={S.radioLabel}>{option}</span>
                </label>
              ))}
            </div>
            {error && <span className={S.errorMessage}>{error.message}</span>}
          </div>
        );

      case 'SHORT_ANSWER':
        return (
          <div key={index} className={S.questionContainer}>
            <div className={S.questionHeader}>
              <div className={S.FormContentTitle}>
                {question.title}
                {question.isEssential && <span className={S.FormContentTitleEssential}>*</span>}
              </div>
              {question.subTitle && (
                <div className={S.FormContentSubTitle}>{question.subTitle}</div>
              )}
            </div>
            <input
              type="text"
              className={S.shortAnswerInput}
              placeholder="답변을 입력해주세요"
              {...register(`questions.${index}.value` as keyof ApplyFormData, {
                // required: question.isEssential ? '입력해주세요.' : false,
              })}
              required={question.isEssential}
            />
            {error && <span className={S.errorMessage}>{error.message}</span>}
          </div>
        );

      case 'LONG_ANSWER':
        return (
          <div key={index} className={S.questionContainer}>
            <div className={S.questionHeader}>
              <div className={S.FormContentTitle}>
                {question.title}
                {question.isEssential && <span className={S.FormContentTitleEssential}>*</span>}
              </div>
              {question.subTitle && (
                <div className={S.FormContentSubTitle}>{question.subTitle}</div>
              )}
            </div>
            <textarea
              className={S.longAnswerTextarea}
              placeholder="답변을 입력해주세요"
              rows={5}
              {...register(`questions.${index}.value` as keyof ApplyFormData, {
                // required: question.isEssential,
              })}
              required={question.isEssential}
            />
            {error && <span className={S.errorMessage}>{error.message}</span>}
          </div>
        );

      case 'FILE':
        return (
          <div key={index} className={S.questionContainer}>
            <div className={S.questionHeader}>
              <div className={S.FormContentTitle}>
                {question.title}
                {question.isEssential && <span className={S.FormContentTitleEssential}>*</span>}
              </div>
              {question.subTitle && (
                <div className={S.FormContentSubTitle}>{question.subTitle}</div>
              )}
            </div>
            <input
              type="file"
              className={S.fileInput}
              {...register(`questions.${index}.value` as keyof ApplyFormData, {
                // required: question.isEssential,
              })}
              required={question.isEssential}
            />
            {error && <span className={S.errorMessage}>{error.message}</span>}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {questions.map((question, index) => (
        <div key={index} id={`question-${index}`}>
          {renderQuestion(question, index)}
        </div>
      ))}
    </>
  );
}
