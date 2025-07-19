import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as S from '@/components/apply/form.css';
import { applyFormSchema, ApplyFormData } from './schema';
import BasicInfoSection from './BasicInfoSection';
import QuestionsSection from './QuestionsSection';
import { useClubInfo } from '@/hooks/useUserForm';

export default function Form({ clubId }: { clubId: string }) {
  const { data } = useClubInfo(Number(clubId));

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

  return (
    <div className={S.container}>
      <div className={S.FormHeader}>
        <div className={S.FormTitle}>{data?.title} 지원서</div>
        <div className={S.FormSubTitle}>{data?.subTitle}</div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <BasicInfoSection register={register} errors={errors} />

        {data?.questions && data.questions.length > 0 && (
          <QuestionsSection questions={data.questions} register={register} errors={errors} />
        )}

        {/* 추후 다른 섹션들이 여기에 추가될 예정 */}
        {/* 예: <AdditionalInfoSection register={register} errors={errors} /> */}
        {/* 예: <MotivationSection register={register} errors={errors} /> */}

        <div className={S.submitButtonContainer}>
          <button type="submit" className={S.submitButton}>
            지원서 제출
          </button>
        </div>
      </form>
    </div>
  );
}
