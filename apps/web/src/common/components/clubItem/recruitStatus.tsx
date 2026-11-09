import Tag from '@/common/ui/tag';
import { TagVariant } from '@/common/ui/tag/tag.css';
import { RecruitState } from '@/common/model/club';
import { toRecruitState } from '@/common/util/recruitState';
import * as S from './clubItem.css';

const RECRUIT_TAG: Record<RecruitState, { label: string; variant: TagVariant }> = {
  UPCOMING: { label: '모집 예정', variant: 'blue' },
  OPEN: { label: '모집중', variant: 'secondary' },
  CLOSED: { label: '모집마감', variant: 'tertiary' },
};

interface RecruitStatusProps {
  recruiting: boolean;
  recruitState?: RecruitState;
  className?: string;
}

function RecruitStatus({ recruiting, recruitState, className }: RecruitStatusProps) {
  const { label, variant } = RECRUIT_TAG[toRecruitState(recruitState, recruiting)];
  return (
    <Tag className={className ?? S.tagStyle} variant={variant}>
      {label}
    </Tag>
  );
}

export default RecruitStatus;
