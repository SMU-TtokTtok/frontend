import Tag from '@/common/ui/tag';
import * as S from './clubItem.css';
function RecruitStatus({ isRecruiting }: { isRecruiting: boolean }) {
  return (
    <Tag
      className={S.tagStyle}
      variant={isRecruiting ? 'secondary' : 'tertiary'}
    >
      {isRecruiting ? '모집중' : '모집마감'}
    </Tag>
  );
}

export default RecruitStatus;
