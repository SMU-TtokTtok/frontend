import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as S from '@/components/apply/form.css';
import { applyFormSchema, ApplyFormData } from './schema';
import BasicInfoSection from './BasicInfoSection';

export default function Form() {
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
        <div className={S.FormTitle}>제목</div>
        <div className={S.FormSubTitle}>부제목</div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)}>
        <BasicInfoSection register={register} errors={errors} />

        {/* 추후 다른 섹션들이 여기에 추가될 예정 */}
        {/* 예: <AdditionalInfoSection register={register} errors={errors} /> */}
        {/* 예: <MotivationSection register={register} errors={errors} /> */}
      </form>
    </div>
  );
}
