import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as S from './form.css';
import ClubMemberForm from './ClubMemberForm';
import { clubMemberAddSchema, ClubMemberAddData } from './schema';

export default function Form() {
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
        <div></div>
      </form>
    </div>
  );
}
