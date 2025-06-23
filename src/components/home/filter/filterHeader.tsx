import React from 'react';
import * as S from './filter.css';
import { FILTER, FILTER_KO } from '@/common/constants';
import { SearchQueryReturn } from '@/hooks/useSearchQuery';
import DropDownTabBar from './dropdownTabBar';
import SortTabBar from './sortTabBar';

export interface FilterHeaderProps {
  selectedOptions?: SearchQueryReturn;
}
const dropdownFilters = [
  { label: '분야', key: 'category' },
  { label: '모집여부', key: 'recruit' },
] as const;

export const getSelectedLabel = (
  key: keyof typeof FILTER,
  selectedOptions?: SearchQueryReturn,
): string => {
  const selected = selectedOptions?.[key] as string | undefined;
  const index = selected ? FILTER[key].indexOf(selected) : -1;
  return index !== -1
    ? FILTER_KO[key][index]
    : dropdownFilters.find((f) => f.key === key)?.label ?? '';
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
