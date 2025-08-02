import React from 'react';
import { useForm, FieldErrors } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as S from '@/components/apply/form.css';
import { applyFormSchema, ApplyFormData } from './schema';
import BasicInfoSection from './BasicInfoSection';
import QuestionsSection from './QuestionsSection';
import { useClubInfo, usePostForm } from '@/hooks/useUserForm';
import Button from '@/common/ui/button';
import { useFollowSidebar } from '@/hooks/useFollowSidebar';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { sidebarTop } from './form.css';

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export default function Form({ clubId }: { clubId: string }) {
  const { barPosition } = useFollowSidebar({ initialPosition: 0 });

  const { data: clubData } = useClubInfo(clubId);
  const { handlePostForm } = usePostForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ApplyFormData>({
    resolver: zodResolver(applyFormSchema),
  });

  // 질문 데이터가 로드되면 questionId 설정
  React.useEffect(() => {
    if (clubData?.questions) {
      clubData.questions.forEach((question, index) => {
        setValue(`questions.${index}.questionId`, question.questionId);
      });
    }
  }, [clubData?.questions, setValue]);

  const onSubmit = (data: ApplyFormData) => {
    const formData = new FormData();

    const questionIds: string[] = [];

    const answers =
      data.questions?.map((question) => {
        let value;

        // 답변 타입에 따라 value 처리
        if (Array.isArray(question.value)) {
          // 체크박스의 경우 배열을 그대로 사용
          value = question.value;
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
          // 문자열 답변의 경우 그대로 사용
          value = question.value || '';
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
      email: data.email,
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
    // console.log(requestData);
    // console.log(questionIds);
    // for (const [key, value] of formData) {
    //   console.log(key, value);
    // }

    handlePostForm(formData, clubId);
  };

  const onError = (errors: FieldErrors<ApplyFormData>) => {
    console.log('폼 에러:', errors);
  };

  return (
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
            {clubData?.questions?.map((question, index) => (
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
        <Button type="submit" variant="primary" className={S.submitButton}>
          제출하기
        </Button>
      </div>

      <Button type="submit" variant="primary" className={S.submitButtonMobile}>
        제출하기
      </Button>
    </form>
  );
}
