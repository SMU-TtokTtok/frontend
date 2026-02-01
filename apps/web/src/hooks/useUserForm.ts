import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { clubFormKey } from './queries/key';
import { gethFormInfo } from '@/components/apply/api/getFormInfo';
import { postFormInfo } from '@/components/apply/api/postFormInfo';
import { postFormTempData } from '@/components/apply/api/postFormData';
import { CustomHttpError } from '@/common/apis/apiClient';
import { userKey } from './queries/key';
import { userTempDataKey } from './queries/key';
import { useQueryClient } from '@tanstack/react-query';
import { getFormData } from '@/components/apply/api/getFormData';

export const useClubInfo = (clubId: string) => {
  const { clubForm } = clubFormKey;

  const { data } = useSuspenseQuery({
    queryKey: [clubForm, clubId],
    queryFn: () => gethFormInfo(clubId),
  });
  return { data };
};

export const useGetTempData = (formId: string) => {
  const { userTempData } = userTempDataKey;

  const { data } = useSuspenseQuery({
    queryKey: [userTempData, formId],
    queryFn: () => getFormData(formId),
  });
  return { data };
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
      if (error.status === 413) {
        alert('파일 용량이 너무 큽니다.');
      } else if (error.status === 409) {
        alert('이미 제출하였습니다');
      } else if (error.status !== 401) {
        alert('제출에 실패했습니다');
      }
    },
  });

  const handlePostForm = (body: FormData, clubId: string) => {
    postFormMutation.mutate({ body, clubId });
  };

  return { handlePostForm };
};

export const usePostTempData = (handleTempSaveModalOpen: () => void) => {
  const queryClient = useQueryClient();
  const { userTempData } = userTempDataKey;

  const postFormDataMutation = useMutation({
    mutationFn: ({ body, formId }: { body: FormData; formId: string }) =>
      postFormTempData(body, formId),
    onSuccess: (_data: unknown, variables: { body: FormData; formId: string }) => {
      handleTempSaveModalOpen();
      queryClient.invalidateQueries({ queryKey: [userTempData, variables.formId] });
    },
    onError: (error: CustomHttpError) => {
      if (error.status === 413) {
        alert('파일 용량이 너무 큽니다.');
      } else if (error.status !== 401) {
        alert('임시저장에 실패했습니다.');
      }
    },
  });

  const handlePostTempData = (body: FormData, formId: string) => {
    postFormDataMutation.mutate({ body, formId });
  };

  return { handlePostTempData };
};
