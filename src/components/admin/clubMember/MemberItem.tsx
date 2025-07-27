import * as S from './memberItem.css';
import Tag from '@/common/ui/tag';
import { getKoreanGrade } from '@/common/util/getKoreanGrade';
import { getRoleDisplayName } from '@/common/util/gerKoreanRole';
import { getGradeStyle2 } from '@/common/util/getGradeStyle';
import cancel from '@/assets/cancel.svg';
import Image from 'next/image';
import { useDeleteClubMember } from '@/hooks/useClubMember';

interface MemberItemProps {
  memberId: string;
  name: string;
  major: string;
  role: string;
  grade: string;
  isEditing: boolean;
}

export default function MemberItem({
  memberId,
  name,
  major,
  role,
  grade,
  isEditing,
}: MemberItemProps) {
  const { handleDeleteClubMember } = useDeleteClubMember();

  return (
    <div className={S.isEditingContainer[isEditing ? 'true' : 'false']}>
      <div className={S.container}>
        <div className={S.withOutRoleContainer}>
          <Tag variant={getGradeStyle2(grade)} className={S.grade}>
            {getKoreanGrade(grade)}
          </Tag>
          <div className={S.name}>{name}</div>
          <div className={S.bar}>|</div>
          <div className={S.major}>{major}</div>
        </div>
        <Tag variant="white" className={S.role}>
          {getRoleDisplayName(role)}
        </Tag>
      </div>
      {isEditing && (
        <Image
          src={cancel}
          alt="cancel"
          width={30}
          height={30}
          style={{ cursor: 'pointer' }}
          onClick={() => handleDeleteClubMember(memberId)}
        />
      )}
    </div>
  );
}
