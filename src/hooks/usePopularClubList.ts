import { useSuspenseQuery } from '@tanstack/react-query';
import { clubKey } from './queries/key';
import { getPopularList } from '@/components/home/popularClubList/api/popularList';

export const usePopularClubList = () => {
  const { popularClubList } = clubKey;

  const { data, isLoading } = useSuspenseQuery({
    queryKey: [popularClubList],
    queryFn: () => getPopularList(),
  });
  return { data, isLoading };
};
