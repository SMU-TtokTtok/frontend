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

function DropDownTabBar({ selectedOptions }: FilterHeaderProps) {
  return (
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
  );
}

export default DropDownTabBar;
