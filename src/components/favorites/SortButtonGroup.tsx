'use client';

import React from 'react';
import * as S from './index.css';
import Button from '@/common/ui/button';
import { SearchQueryReturn } from '@/hooks/useSearchQuery';
import QueryLink from '@/common/components/queryLink';

interface SortButtonGroupProps {
  title: string;
  filter: SearchQueryReturn;
}

export default function SortButtonGroup({ title, filter }: SortButtonGroupProps) {
  const sort = filter.sort || 'latest';

  return (
    <div className={S.HeaderWrapper}>
      <div className={S.HeaderContainer}>
        <div className={S.TitleText}>{title}</div>
        <div className={S.SortFlex}>
          <QueryLink extraQuery={{ sort: 'latest' }} preserveQuery={false}>
            <Button
              variant={sort === 'latest' ? 'secondary' : 'none'}
              className={S.ButtonStyle({ selected: sort === 'latest', position: 'first' })}
            >
              최신등록순
            </Button>
          </QueryLink>
          <QueryLink extraQuery={{ sort: 'member' }} preserveQuery={false}>
            <Button
              variant={sort === 'member' ? 'secondary' : 'none'}
              className={S.ButtonStyle({ selected: sort === 'member', position: 'middle' })}
            >
              멤버많은순
            </Button>
          </QueryLink>
          <QueryLink extraQuery={{ sort: 'popular' }} preserveQuery={false}>
            <Button
              variant={sort === 'popular' ? 'secondary' : 'none'}
              className={S.ButtonStyle({ selected: sort === 'popular', position: 'last' })}
            >
              인기도순
            </Button>
          </QueryLink>
        </div>
      </div>
    </div>
  );
}
