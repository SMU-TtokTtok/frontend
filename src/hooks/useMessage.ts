import { useMutation } from '@tanstack/react-query';
import { postMessage } from '@/components/message/api/postMessage';
import { postMessageBody } from '@/components/message/api/postMessage';

export const usePostMessage = (clubId: string, handleModalOpen: () => void) => {
  const postClubMemberMutation = useMutation({
    mutationFn: (body: postMessageBody) => postMessage(body, clubId),
    onSuccess: () => {
      handleModalOpen();
    },
  });

  const handlePostMessage = (body: postMessageBody) => {
    postClubMemberMutation.mutate(body);
  };

  return { handlePostMessage };
};
