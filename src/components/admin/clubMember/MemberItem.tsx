import * as S from './memberItem.css';
import Tag from '@/common/ui/tag';
import { getKoreanGrade } from '@/common/util/getKoreanGrade';
import { getRoleDisplayName } from '@/common/util/gerKoreanRole';
import { getGradeStyle2 } from '@/common/util/getGradeStyle';

interface MemberItemProps {
  // memberId: string;
  name: string;
  major: string;
  role: string;
  grade: string;
}

export default function MemberItem({ name, major, role, grade }: MemberItemProps) {
  return (
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
  );
}
