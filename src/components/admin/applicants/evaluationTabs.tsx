import Button from '@/common/ui/button';
import * as S from './applicants.css';
import QueryLink from '@/common/components/queryLink';
import { ApplicantListParams } from './api/applicants';
import { useApplicantList } from '@/hooks/applicants';
interface EvaluationTabsProps {
  selectedOptions: ApplicantListParams;
}

function EvaluationTabs({ selectedOptions }: EvaluationTabsProps) {
  const isDocumentEvaluation = selectedOptions.evaluation === 'DOCUMENT';
  const isInterviewEvaluation = selectedOptions.evaluation === 'INTERVIEW';
  const { hasInterview } = useApplicantList({ selectedOptions });
  return (
    <div className={S.evaluationTabs}>
      <div className={S.evaluationButtonWrapper}>
        <QueryLink extraQuery={{ evaluation: 'DOCUMENT' }}>
          <Button
            type="button"
            variant={'none'}
            className={S.evaluationButton({ isSelected: isDocumentEvaluation })}
          >
            서류
          </Button>
        </QueryLink>
      </div>

      {hasInterview && (
        <div className={S.evaluationButtonWrapper}>
          <QueryLink extraQuery={{ evaluation: 'INTERVIEW' }}>
            <Button
              type="button"
              variant={'none'}
              className={S.evaluationButton({ isSelected: isInterviewEvaluation })}
            >
              면접
            </Button>
          </QueryLink>
        </div>
      )}
    </div>
  );
}

export default EvaluationTabs;
