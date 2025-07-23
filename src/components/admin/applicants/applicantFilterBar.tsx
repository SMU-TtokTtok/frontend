import Button from '@/common/ui/button';
import * as S from './applicants.css';
import QueryLink from '@/common/components/queryLink';
import Checkbox from '@/common/ui/checkbox';
import Check from '@/assets/check_radio.svg';
import { ApplicantListParams } from './api/applicants';
interface ApplicantFilterBarProps {
  selectedOptions: ApplicantListParams;
}

function ApplicantFilterBar({ selectedOptions }: ApplicantFilterBarProps) {
  const sort = selectedOptions.sort;

  return (
    <div className={S.filterContainer}>
      <div>
        <QueryLink extraQuery={{ sort: 'grade' }}>
          <Button
            className={S.filterButton({ isSelected: sort === 'grade' })}
            variant={sort === 'grade' ? 'secondary' : 'surface'}
          >
            학년별
          </Button>
        </QueryLink>
        <QueryLink extraQuery={{ sort: 'submit' }}>
          <Button
            className={S.filterButton({ isSelected: sort === 'submit' })}
            variant={sort === 'submit' ? 'secondary' : 'surface'}
          >
            제출순
          </Button>
        </QueryLink>
      </div>
      <div>
        <QueryLink extraQuery={{ isEvaluating: `${!selectedOptions.isEvaluating}` }}>
          <Checkbox
            label="평가중만 보기"
            className={S.checkbox}
            variant="primary"
            defaultChecked={selectedOptions.isEvaluating}
            img={Check}
            imgSize={S.checkImg}
          />
        </QueryLink>
      </div>
    </div>
  );
}

export default ApplicantFilterBar;
