import * as S from './filter.css';
import DropDown from '@/common/components/dropdown';
import QueryLink from '@/common/components/queryLink';
import { FILTER_CONFIG } from '@/common/constants';
import Button from '@/common/ui/button';
import Image from 'next/image';
import Arrow from '@/assets/drop.svg';
import React from 'react';
import { FilterHeaderProps, getSelectedLabel } from './filterHeader';

const dropdownFilters = [
  { defaultLabel: '분야', key: 'category' },
  { defaultLabel: '모집여부', key: 'recruiting' },
] as const;

function DropDownTabBar({
  selectedOptions,
  isFilterOpen = false,
  onFilterToggle,
}: FilterHeaderProps) {
  return (
    <div className={S.headerLeftSideLayout}>
      <div className={S.headerLeftSide}>
        {dropdownFilters.map(({ key, defaultLabel }) => {
          return (
            <DropDown
              key={key}
              panelClassName={S.panelPosition}
              toggleButton={
                <Button variant="none" className={S.headerLeftSideButton({ style: key })}>
                  {getSelectedLabel(key, defaultLabel, selectedOptions)}
                  <Image src={Arrow} alt="화살표" className={S.DownArrow} />
                </Button>
              }
            >
              {FILTER_CONFIG[key].map((option) => (
                <QueryLink key={option.value} extraQuery={{ [key]: option.value }}>
                  <li className={S.dropDownItem({ style: key })}>{option.label}</li>
                </QueryLink>
              ))}
            </DropDown>
          );
        })}
      </div>
      <Button
        variant="none"
        className={S.filterIconButton({ isActive: isFilterOpen })}
        onClick={onFilterToggle}
        aria-label={isFilterOpen ? '필터 닫기' : '필터 열기'}
        aria-pressed={isFilterOpen}
      >
        <svg
          className={S.filterIcon({ isActive: isFilterOpen })}
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M10 8H14M12 21V12M12 8V3M17 16H21M19 12V3M19 21V16M3 14H7M5 10V3M5 21V14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Button>
    </div>
  );
}

export default DropDownTabBar;
