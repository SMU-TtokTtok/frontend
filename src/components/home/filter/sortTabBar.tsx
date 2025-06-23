import * as S from './filter.css';
import QueryLink from '@/common/components/queryLink';
import { FILTER, FILTER_KO } from '@/common/constants';
import Button from '@/common/ui/button';
import { FilterHeaderProps } from './filterHeader';

function SortTabBar({ selectedOptions }: FilterHeaderProps) {
  return (
    <div className={S.headerRightSide}>
      {FILTER.sort.map((label) => (
        <QueryLink key={label} extraQuery={{ sort: label }}>
          <Button
            key={label}
            variant={'none'}
            className={S.ButtonStyle({
              style: 'headerRightside',
              isSelected: selectedOptions?.sort.includes(label),
            })}
          >
            {FILTER_KO.sort[FILTER.sort.indexOf(label)]}
          </Button>
        </QueryLink>
      ))}
    </div>
  );
}

export default SortTabBar;
