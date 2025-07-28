import { useForm, FieldErrors } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as S from '@/components/apply/form.css';
import { applyFormSchema, ApplyFormData } from './schema';
import BasicInfoSection from './BasicInfoSection';
import QuestionsSection from './QuestionsSection';
import { useClubInfo } from '@/hooks/useUserForm';
import Button from '@/common/ui/button';

const content = [
  {
    content: '기본인적사항',
  },
  {
    content: '자기소개',
  },
  {
    content: '지원동기',
  },
  {
    content: '동아리에서 해보고싶은 활동',
  },
  {
    content:
      '해당 내용에 들어가는 글의 길이는 2line을 넘지 않습니다. 만약 넘을 시 이렇게 처리해주세요...',
  },
];

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
          <div className={S.ContentContainer}>
            {content.map((item, index) => (
              <div className={S.contentText} key={index}>
                {index + 1}. {item.content}
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
