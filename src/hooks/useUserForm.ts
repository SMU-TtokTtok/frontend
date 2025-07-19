import { useSuspenseQuery } from '@tanstack/react-query';
import { clubFormKey } from './queries/key';
import { gethFormInfo } from '@/components/apply/api/getFormInfo';

export const useClubInfo = (clubId: string) => {
  const { clubForm } = clubFormKey;

  const { data, isLoading } = useSuspenseQuery({
    queryKey: [clubForm, clubId],
    queryFn: () => gethFormInfo(clubId),
  });
  return { data, isLoading };
};
