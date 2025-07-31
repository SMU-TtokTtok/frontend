import * as S from './filter.css';
import QueryLink from '@/common/components/queryLink';
import { FILTER_CONFIG } from '@/common/constants';
import Button from '@/common/ui/button';
import { FilterHeaderProps } from './filterHeader';

function SortTabBar({ selectedOptions }: FilterHeaderProps) {
  return (
    <div className={S.headerRightSide}>
      {FILTER_CONFIG.sort.map((option) => (
        <QueryLink key={option.value} extraQuery={{ sort: option.value }}>
          <Button
            key={option.value}
            variant={'none'}
            className={S.ButtonStyle({
              style: 'headerRightside',
              isSelected: selectedOptions?.sort!.includes(option.value),
            })}
          >
            {option.label}
          </Button>
        </QueryLink>
      ))}
    </div>
  );
}

export default SortTabBar;
