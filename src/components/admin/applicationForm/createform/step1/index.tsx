'use client';
import Indicator from '../indicator';
import * as S from '../createform.css';
import Button from '@/common/ui/button';
import QueryLink from '@/common/components/queryLink';
import { useState } from 'react';
import { saveToSession } from '@/common/util/sessionStorageUtil';
import SelectBoxGroup from './selectBoxGroup';

function SelectTypeStep() {
  const [withInterview, setWithInterview] = useState<boolean | null>(null);

  const handleSelectWithSession = (isInterview: boolean) => {
    setWithInterview(isInterview);
    saveToSession('hasInterview', isInterview);
    saveToSession('interviewEndDate', null);
    saveToSession('interviewStartDate', null);
  };

  return (
    <div className={S.container}>
      <div className={S.header({ step: 1 })}>
        <Indicator step={1} />
        <h3 className={S.Title}>지원폼 제작하기</h3>
      </div>

      <div className={S.selectTypeContainer}>
        <h3 className={S.TitleInBox}>1. 모집 전형 선택</h3>
        <p className={S.descriptionInBox}>지원자 모집 전형을 선택해주세요</p>

        <SelectBoxGroup withInterview={withInterview} handleSelect={handleSelectWithSession} />
      </div>
      <div className={S.nextStepButtonContainer({ step: 1 })}>
        <div className={S.buttonWrapper}>
          <QueryLink extraQuery={{ step: 2 }}>
            <Button
              variant="primary"
              disabled={withInterview === null}
              className={S.nextStepButton}
            >
              다음으로
            </Button>
          </QueryLink>
        </div>
      </div>
    </div>
  );
}

export default SelectTypeStep;
