'use client';

import React from 'react';
import * as S from './index.css';
import Button from '@/common/ui/button';
import { useRouter } from 'next/navigation';
import { SearchQueryReturn } from '@/hooks/useSearchQuery';

interface SortButtonGroupProps {
  title: string;
  filter: SearchQueryReturn;
  path: string;
}

export default function SortButtonGroup({ title, filter, path }: SortButtonGroupProps) {
  const router = useRouter();
  const { sort } = filter;

  return (
    <div className={S.HeaderWrapper}>
      <div className={S.HeaderContainer}>
        <div className={S.TitleText}>{title}</div>
        <div className={S.SortFlex}>
          <Button
            variant={sort === 'latest' ? 'secondary' : 'none'}
            className={S.ButtonStyle}
            onClick={() => router.push(`${path}?sort=latest`)}
          >
            최신등록순
          </Button>
          <Button
            variant={sort === 'member' ? 'secondary' : 'none'}
            className={S.ButtonStyle}
            onClick={() => router.push(`${path}?sort=member`)}
          >
            멤버많은순
          </Button>
          <Button
            variant={sort === 'popular' ? 'secondary' : 'none'}
            className={S.ButtonStyle}
            onClick={() => router.push(`${path}?sort=popular`)}
          >
            인기도순
          </Button>
        </div>
      </div>
    </div>
  );
}
