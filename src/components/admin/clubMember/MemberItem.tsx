import * as S from './memberItem.css';
import Tag from '@/common/ui/tag';

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
        <Tag variant="secondary" className={S.grade}>
          {grade}학년
        </Tag>
        <div className={S.name}>{name}</div>
        <div className={S.bar}>|</div>
        <div className={S.major}>{major}</div>
      </div>
      <Tag variant="white" className={S.role}>
        {role}
      </Tag>
    </div>
  );
}
