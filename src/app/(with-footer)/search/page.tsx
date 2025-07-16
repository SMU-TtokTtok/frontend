'use client';

import InfiniteClubList from '@/components/favorites/InfiniteClublist';
import { useSearchQuery } from '@/hooks/useSearchQuery';
import SortButtonGroup from '@/components/favorites/SortButtonGroup';
import { useSearchInfinite } from '@/hooks/useInfiniteCommon';
import { useState } from 'react';

export default function Page() {
  const { filter } = useSearchQuery();
  const [total, setTotal] = useState<number | null>(null);

  const handleTotal = (data: number) => {
    setTotal(data);
  };

  return (
    <div>
      <SortButtonGroup title="검색결과" filter={filter} total={total} />
      <InfiniteClubList
        title="검색결과"
        selectedOptions={filter}
        useInfinite={useSearchInfinite}
        handleTotal={handleTotal}
      />
    </div>
  );
}
