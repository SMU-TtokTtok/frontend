import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as S from './form.css';
import ClubMemberForm from './ClubMemberForm';
import { clubMemberAddSchema, ClubMemberAddData } from './schema';
import Button from '@/common/ui/button';
import { useRouter } from 'next/navigation';
import { usePostClubMember } from '@/hooks/useClubMember';
import { ROUTES } from '@/common/constants/routes';

export default function Form({ role }: { role: string }) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClubMemberAddData>({
    resolver: zodResolver(clubMemberAddSchema),
  });
  const { handlePostClubMember } = usePostClubMember(() => {
    router.push(ROUTES.ADMIN_CLUB_MEMBER);
  });

  const onSubmit = (data: ClubMemberAddData) => {
    handlePostClubMember(
      {
        name: data.name,
        studentNum: Number(data.studentId),
        major: data.major,
        email: data.email,
        phone: data.phone,
        grade: data.grade || '',
        gender: data.gender || '',
      },
      role,
    );
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
