import { useSuspenseQuery } from '@tanstack/react-query';
import { clubDataKey } from './queries/key';

export const usePopularClubList = () => {
  const { popularClubList } = clubDataKey;

  const { data, isLoading } = useSuspenseQuery({
    queryKey: [popularClubList],
    queryFn: () => {},
  });
  return { data, isLoading };
};
