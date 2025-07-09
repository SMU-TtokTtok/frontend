'use client';

import { useSearchParams } from 'next/navigation';
import * as S from './applicants.css';
import EvaluationTabs from './evaluationTabs';
import SearchBarArea from './searchBarArea';
import ApplicantFilterBar from './applicantFilterBar';
import ApplicantList from './applicantList/applicantList';
import { useState } from 'react';
import PassFailSidebar from './passFailSidebar';
import SearchResult from './searchResult';
import { Evaluation, Sort } from './api/applicants';
function ApplicantsContentPage() {
  const searchParams = useSearchParams();
  const [search, setSearch] = useState('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const selectedOptions = {
    evaluation: searchParams.get('evaluation') as Evaluation,
    sort: searchParams.get('sort') as Sort,
    isEvaluating: searchParams.get('isEvaluating') === 'true',
  };

  return (
    <div className={S.container}>
      <div className={S.wrapper}>
        <h3 className={S.title}>✏️ 지원자 관리</h3>
        <PassFailSidebar selectedOptions={selectedOptions} />
        <SearchBarArea search={search} handleSearchChange={handleSearchChange} />
        <EvaluationTabs selectedOptions={selectedOptions} />
        <div className={S.PanelContainer}>
          <ApplicantFilterBar selectedOptions={selectedOptions} />
          {search && <SearchResult selectedOptions={selectedOptions} search={search} />}
          {!search && <ApplicantList selectedOptions={selectedOptions} />}
        </div>
      </div>
    </div>
  );
}

export default ApplicantsContentPage;
