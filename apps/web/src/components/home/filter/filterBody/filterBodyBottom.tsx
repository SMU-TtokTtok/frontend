import * as S from '../filter.css';
import { SearchQueryReturn } from '@/hooks/useSearchQuery';
import TypeTabBar from './typeTabBar';
import CollegeTabBar from './collegeTabBar';
export interface FilterProps {
  selectedOptions: SearchQueryReturn;
}
function FilterBodyBottom({ selectedOptions }: FilterProps) {
  return (
    <div className={S.filterBodyBottomWrapper}>
      <div className={S.filterWrapper()}>
        <p className={S.title({ margin: 'secondaryType' })}>종류</p>

        <div className={S.filterSection}>
          <TypeTabBar selectedOptions={selectedOptions} />
          <CollegeTabBar selectedOptions={selectedOptions} />
        </div>
      </div>
    </div>
  );
}

export default FilterBodyBottom;
