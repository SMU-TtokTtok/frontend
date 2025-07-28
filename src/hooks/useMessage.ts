import { useMutation } from '@tanstack/react-query';
import { postMessage } from '@/components/message/api/postMessage';
import { postMessageBody } from '@/components/message/api/postMessage';

export const usePostMessage = () => {
  const postClubMemberMutation = useMutation({
    mutationFn: (body: postMessageBody) => postMessage(body),
    onSuccess: () => {},
  });

  const handlePostMessage = (body: postMessageBody) => {
    postClubMemberMutation.mutate(body);
  };

  return { handlePostMessage };
};
