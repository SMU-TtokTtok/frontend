import { useSuspenseQuery } from '@tanstack/react-query';
import { clubKey } from './queries/key';
import { getClubList } from '@/components/home/clubList/api/clubList';
import { SearchQueryReturn } from './useSearchQuery';

interface UseClubListParams {
  selectedOptions: SearchQueryReturn;
  page?: number;
}

// backend와 상의후 인피티트 쿼리로 변경 예정 by 형준
export const useClubSInfinite = ({ selectedOptions, page }: UseClubListParams) => {
  const { allClubList } = clubKey;
  const { data, isLoading } = useSuspenseQuery({
    queryKey: [allClubList, selectedOptions],
    queryFn: () => getClubList(page || 1),
  });
  return { data, isLoading };
};
