import React from 'react';
import { useForm, FieldErrors } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as S from '@/components/apply/form.css';
import { applyFormSchema, ApplyFormData } from './schema';
import BasicInfoSection from './BasicInfoSection';
import QuestionsSection from './QuestionsSection';
import { useClubInfo, usePostForm, usePostTempData, useGetTempData } from '@/hooks/useUserForm';
import Button from '@/common/ui/button';
import { useFollowSidebar } from '@/hooks/useFollowSidebar';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { sidebarTop } from './form.css';
import ConfirmModal from '@/common/components/confirmModal';
import { useModal } from '@/hooks/useModal';
import { ROUTES } from '@/common/constants/routes';
import { TempDataAnswer, Question } from '@/common/model/form';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Form({ clubId }: { clubId: string }) {
  const { barPosition } = useFollowSidebar({ initialPosition: 0 });
  const {
    isOpen: isEditModalOpen,
    handleModalClose: handleEditModalClose,
    handleModalOpen: handleEditModalOpen,
  } = useModal();
  const {
    isOpen: isTempSaveModalOpen,
    handleModalClose: handleTempSaveModalClose,
    handleModalOpen: handleTempSaveModalOpen,
  } = useModal();
  const { data: clubData } = useClubInfo(clubId);
  // formId가 있을 때만 임시저장 데이터 조회
  const { data: tempData } = useGetTempData(clubData?.formId || '');
  const { handlePostForm } = usePostForm(handleEditModalOpen);
  const { handlePostTempData } = usePostTempData(handleTempSaveModalOpen);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<ApplyFormData>({
    resolver: zodResolver(applyFormSchema),
  });

  // 질문 데이터가 로드되면 questionId 설정
  React.useEffect(() => {
    if (clubData?.questions) {
      clubData.questions.forEach((question: { questionId: string }, index: number) => {
        setValue(`questions.${index}.questionId`, question.questionId);
      });
    }
  }, [clubData?.questions, setValue]);

  // tempData가 있으면 폼에 채워넣기
  React.useEffect(() => {
    if (tempData?.hasTempData && tempData.data && clubData?.questions) {
      const data = tempData.data;

      // 기본 정보 채우기
      if (data.name) setValue('name', data.name);
      if (data.age !== null && data.age !== undefined) setValue('age', String(data.age));
      if (data.major) setValue('major', data.major);
      if (data.phone) setValue('phone', data.phone);
      if (data.studentStatus) setValue('studentStatus', data.studentStatus);
      if (data.grade) setValue('grade', data.grade);
      if (data.gender) setValue('gender', data.gender);

      // 이메일 분리
      if (data.email) {
        const [emailPrefix, emailDomain] = data.email.split('@');
        if (emailPrefix) setValue('emailPrefix', emailPrefix);
        if (emailDomain) setValue('emailDomain', emailDomain);
      }

      // 답변 채우기
      if (data.answers && Array.isArray(data.answers)) {
        const loadAnswers = async () => {
          const fileLoadPromises: Promise<void>[] = [];

          for (const answer of data.answers) {
            // questionId로 해당 질문의 인덱스 찾기
            const questionIndex = clubData.questions.findIndex(
              (q: Question) => q.questionId === answer.questionId,
            );

            if (questionIndex !== -1 && answer.value !== null && answer.value !== undefined) {
              const question = clubData.questions[questionIndex];

              // 체크박스의 경우 배열로 처리
              if (question.questionType === 'CHECKBOX' && Array.isArray(answer.value)) {
                // 각 선택된 값을 해당 optionIndex에 매핑
                answer.value.forEach((val: string) => {
                  const optionIndex = question.content?.findIndex((option: string) => option === val);
                  if (optionIndex !== undefined && optionIndex !== -1) {
                    setValue(`questions.${questionIndex}.value.${optionIndex}`, val, {
                      shouldValidate: false,
                    });
                  }
                });
              } else if (question.questionType === 'FILE' && typeof answer.value === 'string') {
                // FILE 타입이고 value가 S3 URL인 경우 파일로 변환
                const url = answer.value;
                if (url.startsWith('http://') || url.startsWith('https://')) {
                  const fileLoadPromise = (async () => {
                    try {
                      const response = await fetch(url);
                      const blob = await response.blob();
                      
                      // URL에서 파일명 추출 (쿼리 파라미터 제거)
                      let fileName = url.split('/').pop() || 'file';
                      fileName = fileName.split('?')[0]; // 쿼리 파라미터 제거
                      
                      // UUID_원본파일명 형식에서 원본 파일명만 추출
                      // 예: "bf1c20ae-5343-4431-8965-3e73a0edaede_다운로드.png" -> "다운로드.png"
                      if (fileName.includes('_')) {
                        const parts = fileName.split('_');
                        if (parts.length > 1) {
                          // UUID 형식 체크 (8-4-4-4-12 형식)
                          const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
                          if (uuidPattern.test(parts[0])) {
                            // UUID 부분 제거하고 원본 파일명만 사용
                            fileName = parts.slice(1).join('_');
                          }
                        }
                      }
                      
                      const file = new File([blob], fileName, { type: blob.type });

                      const dataTransfer = new DataTransfer();
                      dataTransfer.items.add(file);
                      const fileList = dataTransfer.files;

                      // react-hook-form에 설정
                      setValue(`questions.${questionIndex}.value`, fileList, { shouldValidate: false });

                      // DOM이 렌더링된 후 실제 input 요소에 파일 설정
                      setTimeout(() => {
                        const inputElement = document.querySelector(
                          `input[type="file"][name*="questions.${questionIndex}.value"]`,
                        ) as HTMLInputElement;

                        if (inputElement) {
                          try {
                            // @ts-ignore - 브라우저에 따라 가능할 수 있음
                            inputElement.files = dataTransfer.files;
                            const changeEvent = new Event('change', { bubbles: true });
                            inputElement.dispatchEvent(changeEvent);
                          } catch (e) {
                            console.warn('파일을 input에 직접 설정할 수 없습니다:', e);
                          }
                        }
                      }, 100);
                    } catch (error) {
                      console.error('파일 로드 실패:', error);
                    }
                  })();
                  fileLoadPromises.push(fileLoadPromise);
                }
              } else {
                // RADIO, SHORT_ANSWER, LONG_ANSWER의 경우
                setValue(`questions.${questionIndex}.value`, answer.value, { shouldValidate: false });
              }
            }
          }

          // 파일 로드 완료 대기
          await Promise.all(fileLoadPromises);
        };
        loadAnswers();
      }
    }
  }, [tempData, clubData?.questions, setValue]);

  const onSubmit = (data: ApplyFormData) => {
    const formData = new FormData();
    const questionIds: string[] = [];

    const answers =
      data.questions?.map((question) => {
        let value;

        // 답변 타입에 따라 value 처리
        if (Array.isArray(question.value)) {
          // 체크박스의 경우: false가 아닌 값들만 필터링
          const selectedValues = question.value.filter((val: string | boolean) => val !== false);
          value = selectedValues.length > 0 ? selectedValues : null;
        } else if (question.value instanceof FileList) {
          // FileList의 경우 첫 번째 파일을 사용
          if (question.value.length === 0) {
            value = null;
          } else {
            value = null;
            questionIds.push(question.questionId);
            formData.append('files', question.value[0]);
          }
        } else {
          // 문자열 답변의 경우 빈 문자열이면 null, 아니면 그대로 사용
          value = question.value && question.value.trim() !== '' ? question.value : null;
        }

        return {
          questionId: question.questionId,
          value: value,
        };
      }) || [];

    const requestData = {
      name: data.name,
      age: Number(data.age),
      major: data.major,
      email: `${data.emailPrefix}@${data.emailDomain}`,
      phone: data.phone,
      studentStatus: data.studentStatus,
      grade: data.grade,
      answers: answers,
      applyFormId: clubData?.formId,
      gender: data.gender,
    };

    formData.append(
      'request',
      new Blob([JSON.stringify(requestData)], { type: 'application/json' }),
    );

    if (questionIds.length > 0) {
      formData.append(
        'questionIds',
        new Blob([JSON.stringify(questionIds)], { type: 'application/json' }),
      );
    }

    handlePostForm(formData, clubId);
  };

  // 임시저장 핸들러 (validation 없이 현재 폼 데이터를 그대로 저장)
  const handleSaveTempData = () => {
    const currentFormData = watch();
    const formData = new FormData();
    const questionIds: string[] = [];

    const answers =
      currentFormData.questions?.map((question: { questionId: string; value: any }) => {
        let value;

        // 답변 타입에 따라 value 처리
        if (Array.isArray(question.value)) {
          // 체크박스의 경우: false가 아닌 값들만 필터링
          const selectedValues = question.value.filter((val: string | boolean) => val !== false);
          value = selectedValues.length > 0 ? selectedValues : null;
        } else if (question.value instanceof FileList) {
          // FileList의 경우 첫 번째 파일을 사용
          if (question.value.length === 0) {
            value = null;
          } else {
            value = null;
            questionIds.push(question.questionId);
            formData.append('files', question.value[0]);
          }
        } else {
          // 문자열 답변의 경우 빈 문자열이면 null, 아니면 그대로 사용
          value =
            question.value && String(question.value).trim() !== '' ? String(question.value) : null;
        }

        return {
          questionId: question.questionId,
          value: value,
        };
      }) || [];

    const requestData = {
      name: currentFormData.name || null,
      age: currentFormData.age ? Number(currentFormData.age) : null,
      major: currentFormData.major || null,
      email:
        currentFormData.emailPrefix && currentFormData.emailDomain
          ? `${currentFormData.emailPrefix}@${currentFormData.emailDomain}`
          : null,
      phone: currentFormData.phone || null,
      studentStatus: currentFormData.studentStatus || null,
      grade: currentFormData.grade || null,
      gender: currentFormData.gender || null,
      answers: answers,
    };
    formData.append(
      'request',
      new Blob([JSON.stringify(requestData)], { type: 'application/json' }),
    );

    if (questionIds.length > 0) {
      formData.append(
        'questionIds',
        new Blob([JSON.stringify(questionIds)], { type: 'application/json' }),
      );
    }

    if (clubData?.formId) {
      handlePostTempData(formData, clubData.formId);
    }
  };

  const onError = (errors: FieldErrors<ApplyFormData>) => {
    console.log('폼 에러:', errors);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, onError)} className={S.wrapper}>
        <div className={S.contentContainer}>
          <div className={S.FormHeader}>
            <div className={S.FormTitle}>{clubData?.title} </div>
            <div className={S.FormSubTitle}>{clubData?.subTitle}</div>
          </div>

          <BasicInfoSection register={register} errors={errors} />

          {clubData?.questions && clubData.questions.length > 0 && (
            <QuestionsSection questions={clubData.questions} register={register} errors={errors} />
          )}
        </div>

        <div
          className={S.rightSideContainer}
          style={assignInlineVars({
            [sidebarTop]: `${barPosition}px`,
          })}
        >
          <div className={S.BoxFlex}>
            <div className={S.BoxTitle}>목차</div>
            <div className={S.BoxContentContainer}>
              <div className={S.contentText} onClick={() => scrollToSection('basic-info')}>
                1. 기본인적사항
              </div>
              {clubData?.questions?.map((question: { title: string }, index: number) => (
                <div
                  className={S.contentText}
                  key={index}
                  onClick={() => scrollToSection(`question-${index}`)}
                >
                  {index + 2}. {question.title}
                </div>
              ))}
            </div>
          </div>
          <Button
            variant="primary"
            className={S.submitButton}
            type="button"
            onClick={handleSaveTempData}
          >
            임시저장
          </Button>
          <Button type="submit" variant="primary" className={S.submitButton}>
            제출하기
          </Button>
        </div>
        <Button
            variant="primary"
            className={S.saveButton}
            type="button"
            onClick={handleSaveTempData}
          >
            임시저장
          </Button>
        <Button type="submit" variant="primary" className={S.submitButtonMobile}>
          제출하기
        </Button>
      </form>
      <ConfirmModal
        isOpen={isEditModalOpen}
        onClose={handleEditModalClose}
        redirectTo={ROUTES.APPLIED}
      >
        지원이 완료되었습니다
      </ConfirmModal>
      <ConfirmModal
        isOpen={isTempSaveModalOpen}
        onClose={handleTempSaveModalClose}
      >
        임시저장이 완료되었습니다
      </ConfirmModal>
    </>
  );
}

