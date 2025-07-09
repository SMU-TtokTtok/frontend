import Button from '@/common/ui/button';
import * as S from '../filter.css';
import QueryLink from '@/common/components/queryLink';
import { FILTER, FILTER_KO } from '@/common/constants';
import { SearchQueryReturn } from '@/hooks/useSearchQuery';
export interface FilterProps {
  selectedOptions: SearchQueryReturn;
}
function GradeTabBar({ selectedOptions }: FilterProps) {
  return (
    <div className={S.filterWrapper({ marginBottom: 'grade' })}>
      <p className={S.title({ margin: 'primaryType' })}>모집대상</p>
      <div className={S.selectionGroup}>
        {FILTER.grade.map((label) => (
          <QueryLink key={label} extraQuery={{ grade: label }}>
            <Button
              key={label}
              variant="none"
              className={S.ButtonStyle({
                style: 'body',
                isSelected: selectedOptions.grade!.includes(label),
              })}
            >
              {FILTER_KO.grade[FILTER.grade.indexOf(label)]}
            </Button>
          </QueryLink>
        ))}
      </div>
    </div>
  );
}

export default GradeTabBar;
