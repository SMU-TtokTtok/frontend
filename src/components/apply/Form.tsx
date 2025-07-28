import { useForm, FieldErrors } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as S from '@/components/apply/form.css';
import { applyFormSchema, ApplyFormData } from './schema';
import BasicInfoSection from './BasicInfoSection';
import QuestionsSection from './QuestionsSection';
import { useClubInfo } from '@/hooks/useUserForm';
import Button from '@/common/ui/button';

export default function Form({ clubId }: { clubId: string }) {
  const { data } = useClubInfo(Number(clubId));
  console.log(data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ApplyFormData>({
    resolver: zodResolver(applyFormSchema),
  });

  const onSubmit = (data: ApplyFormData) => {
    console.log('폼 데이터:', data);
    // 여기서 API 호출
  };

  const onError = (errors: FieldErrors<ApplyFormData>) => {
    console.log('폼 에러:', errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit, onError)} className={S.wrapper}>
      <div className={S.contentContainer}>
        <div className={S.FormHeader}>
          <div className={S.FormTitle}>{data?.title} </div>
          <div className={S.FormSubTitle}>{data?.subTitle}</div>
        </div>

        <BasicInfoSection register={register} errors={errors} />

        {data?.questions && data.questions.length > 0 && (
          <QuestionsSection questions={data.questions} register={register} errors={errors} />
        )}
      </div>

      <div className={S.rightSideContainer}>
        <div className={S.BoxFlex}>
          <div className={S.BoxTitle}>목차</div>
          <div className={S.BoxContentContainer}>
            <div className={S.contentText}>1. 기본인적사항</div>
            {data?.questions?.map((question, index) => (
              <div className={S.contentText} key={index}>
                {index + 2}. {question.title}
              </div>
            ))}
          </div>
        </div>
        <Button type="submit" variant="primary" className={S.submitButton}>
          제출하기
        </Button>
      </div>
    </form>
  );
}
