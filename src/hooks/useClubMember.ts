import { useSuspenseQuery } from '@tanstack/react-query';
import { getGradeCount } from '@/components/admin/clubMember/api/getGradeCount';
import { getSearchMembers } from '@/components/admin/clubMember/api/getSearchMembers';

export const useGradeCount = () => {
  const { data, isLoading } = useSuspenseQuery({
    queryKey: ['gradeCount'],
    queryFn: () => getGradeCount(),
  });
  return { data, isLoading };
};

export const useSearchClubMember = ({ search }: { search: string }) => {
  const { data, isLoading } = useSuspenseQuery({
    queryKey: ['searchClubMember', search],
    queryFn: () => getSearchMembers(search),
  });
  return { data, isLoading };
};
