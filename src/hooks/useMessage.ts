import { useMutation } from '@tanstack/react-query';
import { postMessage } from '@/components/admin/message/api/postMessage';
import { postMessageBody } from '@/components/admin/message/api/postMessage';

export const usePostMessage = (clubId: string, handleModalOpen: () => void, kind: string) => {
  const postClubMemberMutation = useMutation({
    mutationFn: (body: postMessageBody) => postMessage(body, clubId, kind),
    onSuccess: () => {
      handleModalOpen();
    },
  });

  const handlePostMessage = (body: postMessageBody) => {
    postClubMemberMutation.mutate(body);
  };

  return { handlePostMessage, isLoading: postClubMemberMutation.isPending };
};
