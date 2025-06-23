import { useSuspenseQuery } from '@tanstack/react-query';
import { clubDataKey } from './queries/key';
import { getPopularList } from '@/components/home/popularClubList/api/popularList';

export const usePopularClubList = () => {
  const { popularClubList } = clubDataKey;

  const { data, isLoading } = useSuspenseQuery({
    queryKey: [popularClubList],
    queryFn: () => getPopularList(),
  });
  return { data, isLoading };
};
