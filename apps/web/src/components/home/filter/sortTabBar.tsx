import * as S from './filter.css';
import QueryLink from '@/common/components/queryLink';
import { FILTER_CONFIG } from '@/common/constants';
import Button from '@/common/ui/button';
import { FilterHeaderProps } from './filterHeader';
import { rawSort } from '@/app/layout.css';

function SortTabBar({ selectedOptions }: FilterHeaderProps) {
  return (
    <div className={S.headerRightSide}>
      {FILTER_CONFIG.sort.map((option, index) => (
        <QueryLink key={option.value} extraQuery={{ sort: option.value }}>
          <div className={rawSort}>
            <Button
              key={option.value}
              variant={'none'}
              className={S.headerRightSideButton({
                isSelected: selectedOptions?.sort === option.value,
              })}
            >
              {option.label}
            </Button>
            {index < FILTER_CONFIG.sort.length - 1 && <div className={S.verticalLine} />}
          </div>
        </QueryLink>
      ))}
    </div>
  );
}

export default SortTabBar;
