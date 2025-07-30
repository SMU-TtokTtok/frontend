import { putConnectApplicant } from '@/components/admin/applicants/api/applicants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { clubMemberKey } from './queries/key';

interface useConnectApplicantParams {
  clubId: string;
}

export const useConnectApplicant = ({
  openConfirmModalWithMessage,
}: {
  openConfirmModalWithMessage: (message: string) => void;
}) => {
  const queryClient = useQueryClient();
  const { clubMember } = clubMemberKey;

  const connectApplicantsMutations = useMutation({
    mutationFn: ({ clubId }: useConnectApplicantParams) => putConnectApplicant(clubId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [clubMember] });
      openConfirmModalWithMessage('부원 연동이 완료되었습니다.');
    },
  });

  const handleConnectApplicants = ({ clubId }: useConnectApplicantParams) => {
    connectApplicantsMutations.mutate({ clubId });
  };

  return {
    handleConnectApplicants,
  };
};
