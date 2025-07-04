'use client';
import Indicator from '../indicator';
import * as S from '../createform.css';
import RecruitDate from './recruitDate';
import { loadFromSession } from '@/common/util/sessionStorageUtil';
import RecruitTarget from './recruitTarget';
import RecruitMember from './recruitMember';
import Button from '@/common/ui/button';
import QueryLink from '@/common/components/queryLink';
import InterviewDate from './interviewDate';
import { useRecruitValidation } from './useRecruitValidation';
import { useStepTwoForm } from './useStepTwoForm';

export interface RecruitData {
  recruitStartDate: string | null;
  recruitEndDate: string | null;
  recruitMember: number | null;
  selectedGrades: number[] | null;
  withInterview: boolean | null;
  interviewStartDate: string | null;
  interviewEndDate: string | null;
}

function RecruitConditionStep() {
  const withInterview = loadFromSession('withInterview');
  const { recruitData, handleRecruitData } = useStepTwoForm();
  const isValid = useRecruitValidation(withInterview);

  return (
    <div className={S.container}>
      <div className={S.header({ step: 2 })}>
        <Indicator step={2} />
        <h3 className={S.Title}>지원폼 제작하기</h3>
      </div>

      <div className={S.recruitConditionBox}>
        <h3 className={S.TitleInBox}>2. 모집 기간 및 대상 설정</h3>
        <p className={S.descriptionInBox}>
          이번 부원 모집에서 모집할 대상과 모집기간을 설정해주세요
        </p>
        <RecruitDate handleRecruitData={handleRecruitData} />

        <div className={S.targetMemberContainer}>
          <RecruitTarget recruitData={recruitData} handleRecruitData={handleRecruitData} />
          <RecruitMember handleRecruitData={handleRecruitData} />
          {withInterview && <InterviewDate handleRecruitData={handleRecruitData} />}
        </div>

        <div className={S.nextStepButtonWrapper({ step: 2 })}>
          <QueryLink extraQuery={{ step: 3 }}>
            <Button variant={'primary'} disabled={!isValid} className={S.nextStepButton}>
              다음으로
            </Button>
          </QueryLink>
        </div>
      </div>
    </div>
  );
}

export default RecruitConditionStep;
