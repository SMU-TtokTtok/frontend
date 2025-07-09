import QueryLink from '@/common/components/queryLink';
import { FILTER, FILTER_KO } from '@/common/constants';
import Button from '@/common/ui/button';
import { FilterProps } from './filterBodyBottom';
import * as S from '../filter.css';

function TypeTabBar({ selectedOptions }: FilterProps) {
  return (
    <div className={S.firstTypeWrapper}>
      {FILTER.type.map((label) => (
        <QueryLink key={label} extraQuery={{ type: label }}>
          <Button
            key={label}
            variant="none"
            className={S.ButtonStyle({
              style: 'body',
              isSelected: selectedOptions?.type!.includes(label),
            })}
          >
            {FILTER_KO.type[FILTER.type.indexOf(label)]}
          </Button>
        </QueryLink>
      ))}
    </div>
  );
}

export default TypeTabBar;
