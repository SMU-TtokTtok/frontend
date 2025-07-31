import React from 'react';
import * as S from '../filter.css';
import { FILTER_CONFIG } from '@/common/constants';
import QueryLink from '@/common/components/queryLink';
import Button from '@/common/ui/button';
import { FilterProps } from './filterBodyBottom';

function CollegeTabBar({ selectedOptions }: FilterProps) {
  return (
    <div className={S.selectionGroup}>
      {FILTER_CONFIG.college.map((option) => (
        <QueryLink key={option.value} extraQuery={{ college: option.value }}>
          <Button
            key={option.value}
            variant="none"
            className={S.ButtonStyle({
              style: 'body',
              isSelected: selectedOptions.college!.includes(option.value),
            })}
          >
            {option.label}
          </Button>
        </QueryLink>
      ))}
    </div>
  );
}

export default CollegeTabBar;
