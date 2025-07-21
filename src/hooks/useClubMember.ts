import { useSuspenseQuery } from '@tanstack/react-query';
import { getGradeCount } from '@/components/admin/clubMember/api/getGradeCount';

export const useGradeCount = () => {
  const { data, isLoading } = useSuspenseQuery({
    queryKey: ['gradeCount'],
    queryFn: () => getGradeCount(),
  });
  return { data, isLoading };
};
