import { useSuspenseQuery } from '@tanstack/react-query';
import { clubInfoKey } from './queries/key';
import { getClubInfo } from '@/components/clubInfo/api/getClubInfo';
import { getAdminClubInfo } from '@/components/admin/clubInfo/api/getClubInfo';

export const useClubInfo = (clubId: number) => {
  const { clubInfo } = clubInfoKey;

  const { data, isLoading } = useSuspenseQuery({
    queryKey: [clubInfo, clubId],
    queryFn: () => getClubInfo(clubId),
  });
  return { data, isLoading };
};

export const useAdminClubInfo = () => {
  const { adminClubInfo } = clubInfoKey;

  const { data, isLoading } = useSuspenseQuery({
    queryKey: [adminClubInfo],
    queryFn: () => getAdminClubInfo(),
  });
  return { data, isLoading };
};
