import Button from '@/common/ui/button';
import * as S from '../filter.css';
import QueryLink from '@/common/components/queryLink';
import { FILTER_CONFIG } from '@/common/constants';
import { SearchQueryReturn } from '@/hooks/useSearchQuery';
export interface FilterProps {
  selectedOptions: SearchQueryReturn;
}
function GradeTabBar({ selectedOptions }: FilterProps) {
  return (
    <div className={S.filterWrapper({ marginBottom: 'grades' })}>
      <p className={S.title({ margin: 'primaryType' })}>모집대상</p>
      <div className={S.selectionGroup}>
        {FILTER_CONFIG.grades.map((option) => (
          <QueryLink key={option.value} extraQuery={{ grades: option.value }}>
            <Button
              key={option.value}
              variant="none"
              className={S.ButtonStyle({
                style: 'body',
                isSelected: selectedOptions.grades!.includes(option.value),
              })}
            >
              {option.label}
            </Button>
          </QueryLink>
        ))}
      </div>
    </div>
  );
}

export default GradeTabBar;
