import QueryLink from '@/common/components/queryLink';
import { FILTER_CONFIG } from '@/common/constants';
import Button from '@/common/ui/button';
import { FilterProps } from './filterBodyBottom';
import * as S from '../filter.css';

function TypeTabBar({ selectedOptions }: FilterProps) {
  return (
    <div className={S.firstTypeWrapper}>
      {FILTER_CONFIG.type.map((option) => (
        <QueryLink key={option.value} extraQuery={{ type: option.value }}>
          <Button
            key={option.value}
            variant="none"
            className={S.ButtonStyle({
              style: 'body',
              isSelected: selectedOptions?.type!.includes(option.value),
            })}
          >
            {option.label}
          </Button>
        </QueryLink>
      ))}
    </div>
  );
}

export default TypeTabBar;
