'use client';

import React from 'react';
import * as S from './index.css';
import Button from '@/common/ui/button';
import { SearchQueryReturn } from '@/hooks/useSearchQuery';
import QueryLink from '@/common/components/queryLink';

interface SortButtonGroupProps {
  title: string;
  filter: SearchQueryReturn;
  total?: number | null;
}

export default function SortButtonGroup({ title, filter, total }: SortButtonGroupProps) {
  const sort = filter.sort || 'latest';
  const isSearch = title === '검색결과';

  return (
    <div className={S.HeaderWrapper}>
      <div className={S.HeaderContainer({ isSearch: isSearch })}>
        {isSearch ? (
          <div className={S.SearchTitleText}>
            총 <span className={S.SearchTitleTextSpan}>{total}개</span>의 결과가{' '}
            <br className={S.showOnMobileBr} />
            검색되었습니다.
          </div>
        ) : (
          <div className={S.TitleText}>{title}</div>
        )}
        <div className={S.SortFlex}>
          <QueryLink extraQuery={{ sort: 'latest' }} preserveQuery={isSearch}>
            <Button
              variant={sort === 'latest' ? 'secondary' : 'none'}
              className={S.ButtonStyle({ selected: sort === 'latest', position: 'first' })}
            >
              최신등록순
            </Button>
          </QueryLink>
          <QueryLink extraQuery={{ sort: 'member' }} preserveQuery={isSearch}>
            <Button
              variant={sort === 'member' ? 'secondary' : 'none'}
              className={S.ButtonStyle({ selected: sort === 'member', position: 'middle' })}
            >
              멤버많은순
            </Button>
          </QueryLink>
          <QueryLink extraQuery={{ sort: 'popular' }} preserveQuery={isSearch}>
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
