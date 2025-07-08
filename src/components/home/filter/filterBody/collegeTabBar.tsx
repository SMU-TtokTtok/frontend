import React from 'react';
import * as S from '../filter.css';
import { FILTER, FILTER_KO } from '@/common/constants';
import QueryLink from '@/common/components/queryLink';
import Button from '@/common/ui/button';
import { FilterProps } from './filterBodyBottom';

function CollegeTabBar({ selectedOptions }: FilterProps) {
  return (
    <div className={S.selectionGroup}>
      {FILTER.college.map((label) => (
        <QueryLink key={label} extraQuery={{ college: label }}>
          <Button
            key={label}
            variant="none"
            className={S.ButtonStyle({
              style: 'body',
              isSelected: selectedOptions.college!.includes(label),
            })}
          >
            {FILTER_KO.college[FILTER.college.indexOf(label)]}
          </Button>
        </QueryLink>
      ))}
    </div>
  );
}

export default CollegeTabBar;
