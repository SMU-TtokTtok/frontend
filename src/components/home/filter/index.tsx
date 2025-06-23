import { SearchQueryReturn } from '@/hooks/useSearchQuery';
import * as S from './filter.css';
import FilterBody from './filterBody';
import FilterHeader from './filterHeader';
export interface FilterProps {
  selectedOptions: SearchQueryReturn;
}
function Filter({ selectedOptions }: FilterProps) {
  return (
    <div className={S.container}>
      <div className={S.innerWrapper}>
        <FilterHeader selectedOptions={selectedOptions} />
        <span className={S.horizonLine} />
        <FilterBody selectedOptions={selectedOptions} />
      </div>
    </div>
  );
}

export default Filter;
