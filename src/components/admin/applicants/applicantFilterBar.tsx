import Button from '@/common/ui/button';
import * as S from './applicants.css';
import QueryLink from '@/common/components/queryLink';
import Checkbox from '@/common/ui/checkbox';
import { ApplicantListParams } from './api/applicants';
interface ApplicantFilterBarProps {
  selectedOptions: ApplicantListParams;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function ApplicantFilterBar({ selectedOptions, onChange }: ApplicantFilterBarProps) {
  const isGrade = selectedOptions.grade;

  return (
    <div className={S.filterContainer}>
      <div>
        <QueryLink extraQuery={{ grade: true }}>
          <Button
            className={S.filterButton({ isSelected: isGrade })}
            variant={isGrade ? 'secondary' : 'surface'}
          >
            학년별
          </Button>
        </QueryLink>
        <QueryLink extraQuery={{ grade: false }}>
          <Button
            className={S.filterButton({ isSelected: isGrade === false })}
            variant={isGrade ? 'surface' : 'secondary'}
          >
            제출순
          </Button>
        </QueryLink>
      </div>
      <div>
        <Checkbox
          label="평가중만 보기"
          className={S.checkbox}
          variant="primary"
          onChange={onChange}
        />
      </div>
    </div>
  );
}

export default ApplicantFilterBar;
