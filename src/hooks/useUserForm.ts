import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { clubFormKey } from './queries/key';
import { gethFormInfo } from '@/components/apply/api/getFormInfo';
import { postFormInfo } from '@/components/apply/api/postFormInfo';

export const useClubInfo = (clubId: number) => {
  const { clubForm } = clubFormKey;

  const { data, isLoading } = useSuspenseQuery({
    queryKey: [clubForm, clubId],
    queryFn: () => gethFormInfo(clubId),
  });
  return { data, isLoading };
};

export const usePostForm = () => {
  const postFormMutation = useMutation({
    mutationFn: ({ body, clubId }: { body: any; clubId: string }) => postFormInfo(body, clubId),
    onSuccess: () => {},
  });

  const handlePostForm = (body: any, clubId: string) => {
    postFormMutation.mutate({ body, clubId });
  };

  return { handlePostForm };
};
