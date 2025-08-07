import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { clubFormKey } from './queries/key';
import { gethFormInfo } from '@/components/apply/api/getFormInfo';
import { postFormInfo } from '@/components/apply/api/postFormInfo';
import { CustomHttpError } from '@/common/apis/apiClient';
import { userKey } from './queries/key';
import { useQueryClient } from '@tanstack/react-query';

export const useClubInfo = (clubId: string) => {
  const { clubForm } = clubFormKey;

  const { data, isLoading } = useSuspenseQuery({
    queryKey: [clubForm, clubId],
    queryFn: () => gethFormInfo(clubId),
  });
  return { data, isLoading };
};

export const usePostForm = (handleEditModalOpen: () => void) => {
  const queryClient = useQueryClient();
  const { appliedClubList } = userKey;

  const postFormMutation = useMutation({
    mutationFn: ({ body, clubId }: { body: FormData; clubId: string }) =>
      postFormInfo(body, clubId),
    onSuccess: () => {
      handleEditModalOpen();
      queryClient.invalidateQueries({ queryKey: appliedClubList });
    },
    onError: (error: CustomHttpError) => {
      if (error.status === 409) {
        alert('이미 제출하였습니다');
      } else {
        alert('제출에 실패했습니다');
      }
    },
  });

  const handlePostForm = (body: FormData, clubId: string) => {
    postFormMutation.mutate({ body, clubId });
  };

  return { handlePostForm };
};
