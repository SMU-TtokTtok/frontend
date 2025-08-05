import React from 'react';
import * as S from './filter.css';
import { FILTER_CONFIG } from '@/common/constants';
import { SearchQueryReturn } from '@/hooks/useSearchQuery';
import DropDownTabBar from './dropdownTabBar';
import SortTabBar from './sortTabBar';
export interface FilterHeaderProps {
  selectedOptions?: SearchQueryReturn;
}

type FilterKey = keyof typeof FILTER_CONFIG;

export const getSelectedLabel = (key: FilterKey, selectedOptions?: SearchQueryReturn): string => {
  const selected = selectedOptions?.[key] as string | undefined;
  const option = FILTER_CONFIG[key].find((o) => o.value === selected);
  return option ? option.label : FILTER_CONFIG[key][0].label;
};

function FilterHeader({ selectedOptions }: FilterHeaderProps) {
  return (
    <div className={S.filterHeaderWrapper}>
      <DropDownTabBar selectedOptions={selectedOptions} />
      <SortTabBar selectedOptions={selectedOptions} />
    </div>
  );
}

export default FilterHeader;
