import React from 'react';
import * as S from '../filter.css';
import GradeTabBar from './gradeTabBar';
import FilterBodyBottom from './filterBodyBottom';
import { SearchQueryReturn } from '@/hooks/useSearchQuery';
import ResetButton from './resetButton';
export interface FilterProps {
  selectedOptions: SearchQueryReturn;
}
function FilterBody({ selectedOptions }: FilterProps) {
  return (
    <div className={S.filterBodyWrapper}>
      <GradeTabBar selectedOptions={selectedOptions} />
      <FilterBodyBottom selectedOptions={selectedOptions} />
      <ResetButton />
    </div>
  );
}

export default FilterBody;
