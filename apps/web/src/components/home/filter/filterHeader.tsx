import React from 'react';
import * as S from './filter.css';
import { FILTER_CONFIG } from '@/common/constants';
import { SearchQueryReturn } from '@/hooks/useSearchQuery';
import DropDownTabBar from './dropdownTabBar';
import SortTabBar from './sortTabBar';
export interface FilterHeaderProps {
  selectedOptions?: SearchQueryReturn;
  isFilterOpen?: boolean;
  onFilterToggle?: () => void;
}

type FilterKey = keyof typeof FILTER_CONFIG;

export const getSelectedLabel = (
  key: FilterKey,
  defaultLabel: string,
  selectedOptions?: SearchQueryReturn,
): string => {
  const selected = selectedOptions?.[key] as string | undefined;
  const option = FILTER_CONFIG[key].find((o) => o.value === selected);
  return option ? option.label : defaultLabel;
};

function FilterHeader({ selectedOptions, isFilterOpen, onFilterToggle }: FilterHeaderProps) {
  return (
    <div className={S.filterHeaderWrapper({ isOpen: isFilterOpen })}>
      <DropDownTabBar
        selectedOptions={selectedOptions}
        isFilterOpen={isFilterOpen}
        onFilterToggle={onFilterToggle}
      />
      <SortTabBar selectedOptions={selectedOptions} />
    </div>
  );
}

export default FilterHeader;
