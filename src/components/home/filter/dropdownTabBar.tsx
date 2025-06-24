import * as S from './filter.css';
import DropDown from '@/common/components/dropdown';
import QueryLink from '@/common/components/queryLink';
import { FILTER, FILTER_KO } from '@/common/constants';
import Button from '@/common/ui/button';
import Image from 'next/image';
import Arrow from '@/assets/drop.svg';
import React from 'react';
import { FilterHeaderProps, getSelectedLabel } from './filterHeader';

const dropdownFilters = [
  { label: '분야', key: 'category' },
  { label: '모집여부', key: 'recruit' },
] as const;

function DropDownTabBar({ selectedOptions }: FilterHeaderProps) {
  return (
    <div className={S.headerLeftSide}>
      {dropdownFilters.map(({ key }) => {
        return (
          <DropDown
            key={key}
            panelClassName={S.panelPosition}
            toggleButton={
              <Button variant="none" className={S.headerLeftSideButton({ style: key })}>
                {getSelectedLabel(key, selectedOptions)}
                <Image src={Arrow} alt="화살표" className={S.DownArrow} />
              </Button>
            }
          >
            {FILTER[key].map((option, idx) => (
              <QueryLink key={option} extraQuery={{ [key]: option }}>
                <li className={S.dropDownItem({ style: key })}>{FILTER_KO[key][idx]}</li>
              </QueryLink>
            ))}
          </DropDown>
        );
      })}
    </div>
  );
}

export default DropDownTabBar;
