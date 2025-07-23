import Button from '@/common/ui/button';
import * as S from './applicants.css';
import QueryLink from '@/common/components/queryLink';
import { ApplicantListParams } from './api/applicants';
interface EvaluationTabsProps {
  selectedOptions: ApplicantListParams;
}

function EvaluationTabs({ selectedOptions }: EvaluationTabsProps) {
  const isDocumentEvaluation = selectedOptions.evaluation === 'applies';
  const isInterviewEvaluation = selectedOptions.evaluation === 'interviews';

  return (
    <div className={S.evaluationTabs}>
      <div className={S.evaluationButtonWrapper}>
        <QueryLink extraQuery={{ evaluation: 'applies' }}>
          <Button
            type="button"
            variant={'none'}
            className={S.evaluationButton({ isSelected: isDocumentEvaluation })}
          >
            서류
          </Button>
        </QueryLink>
      </div>

      <div className={S.evaluationButtonWrapper}>
        <QueryLink extraQuery={{ evaluation: 'interviews' }}>
          <Button
            type="button"
            variant={'none'}
            className={S.evaluationButton({ isSelected: isInterviewEvaluation })}
          >
            면접
          </Button>
        </QueryLink>
      </div>
    </div>
  );
}

export default EvaluationTabs;
