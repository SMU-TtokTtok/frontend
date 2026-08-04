'use client';

import { useState } from 'react';
import { SearchQueryReturn } from '@/hooks/useSearchQuery';
import * as S from './filter.css';
import FilterBody from './filterBody';
import FilterHeader from './filterHeader';

export interface FilterProps {
  selectedOptions: SearchQueryReturn;
}

function Filter({ selectedOptions }: FilterProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className={S.container}>
      <div className={S.innerWrapper}>
        <FilterHeader
          selectedOptions={selectedOptions}
          isFilterOpen={isFilterOpen}
          onFilterToggle={() => setIsFilterOpen((prev) => !prev)}
        />
        <div className={S.collapsibleFilterArea({ isOpen: isFilterOpen })}>
          <div className={S.collapsibleFilterContent}>
            <span className={S.horizonLine} />
            <FilterBody selectedOptions={selectedOptions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
