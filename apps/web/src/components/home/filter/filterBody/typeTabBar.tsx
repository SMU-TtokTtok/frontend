import QueryLink from '@/common/components/queryLink';
import { FILTER_CONFIG } from '@/common/constants';
import Button from '@/common/ui/button';
import { FilterProps } from './filterBodyBottom';
import * as S from '../filter.css';
import { useSearchParams } from 'next/navigation';

function TypeTabBar({ selectedOptions }: FilterProps) {
  const searchParams = useSearchParams();

  const existingQuery = Object.fromEntries(searchParams.entries());
  const { clubUniv, ...restQuery } = existingQuery;
  console.log('club Univ:', clubUniv);

  return (
    <div className={S.firstTypeWrapper}>
      {FILTER_CONFIG.type.map((option) => {
        const finalQuery = {
          ...restQuery,
          type: option.value,
        };
        return (
          <QueryLink key={option.value} preserveQuery={false} extraQuery={finalQuery}>
            <Button
              key={option.value}
              variant="none"
              className={S.ButtonStyle({
                style: 'body',
                isSelected: selectedOptions?.type === option.value,
              })}
            >
              {option.label}
            </Button>
          </QueryLink>
        );
      })}
    </div>
  );
}

export default TypeTabBar;
