import { useMutation } from '@tanstack/react-query';
import { postMessage } from '@/components/admin/message/api/postMessage';
import { postMessageBody } from '@/components/admin/message/api/postMessage';
import { CustomHttpError } from '@/common/apis/apiClient';

export const usePostMessage = (clubId: string, handleModalOpen: () => void, kind: string) => {
  const postClubMemberMutation = useMutation({
    mutationFn: (body: postMessageBody) => postMessage(body, clubId, kind),
    onSuccess: () => {
      handleModalOpen();
    },
    onError: (error) => {
      const customError = error as CustomHttpError;
      if (customError.status !== 401) {
        alert('메시지 전송 중 오류가 발생했습니다.');
      }
    },
  });

  const handlePostMessage = (body: postMessageBody) => {
    postClubMemberMutation.mutate(body);
  };

  return { handlePostMessage, isLoading: postClubMemberMutation.isPending };
};
