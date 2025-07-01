'use client';

import { useSearchParams } from 'next/navigation';
import * as S from './applicants.css';
import EvaluationTabs from './evaluationTabs';
import SearchBarArea from './searchBarArea';
import ApplicantFilterBar from './applicantFilterBar';
import ApplicantList from './applicantList/applicantList';
import { ChangeEvent, useState } from 'react';
import PassFailSidebar from './passFailSidebar';

function ApplicantsContentPage() {
  const searchParams = useSearchParams();
  const [isEvaluating, setisEvaluating] = useState(false);
  const handleEvaluationToggle = (e: ChangeEvent<HTMLInputElement>) => {
    setisEvaluating(e.target.checked);
  };

  const selectedOptions = {
    evaluation: searchParams.get('evaluation') || '',
    grade: searchParams.get('grade') === 'true',
    isEvaluating: isEvaluating,
  };

  return (
    <div className={S.container}>
      <div className={S.wrapper}>
        <h3 className={S.title}>✏️ 지원자 관리</h3>
        <PassFailSidebar selectedOptions={selectedOptions} />
        <SearchBarArea />
        <EvaluationTabs selectedOptions={selectedOptions} />
        <div className={S.PanelContainer}>
          <ApplicantFilterBar selectedOptions={selectedOptions} onChange={handleEvaluationToggle} />
          <ApplicantList selectedOptions={selectedOptions} />
        </div>
      </div>
    </div>
  );
}

export default ApplicantsContentPage;
