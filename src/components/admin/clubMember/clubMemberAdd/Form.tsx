import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as S from './form.css';
import ClubMemberForm from './ClubMemberForm';
import { clubMemberAddSchema, ClubMemberAddData } from './schema';
import Button from '@/common/ui/button';
import { useRouter } from 'next/navigation';

export default function Form() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClubMemberAddData>({
    resolver: zodResolver(clubMemberAddSchema),
  });

  const onSubmit = (data: ClubMemberAddData) => {
    console.log(data);
    // TODO: API 호출 로직 추가
  };

  return (
    <div className={S.container}>
      <div className={S.title}>추가할 부원의 정보를 입력하세요</div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ClubMemberForm register={register} errors={errors} />
        <div className={S.ButtonContainer}>
          <Button
            variant="tertiary"
            type="button"
            onClick={() => router.back()}
            className={S.Button}
          >
            취소하기
          </Button>
          <Button variant="primary" type="submit" className={S.Button}>
            추가하기
          </Button>
        </div>
      </form>
    </div>
  );
}
