import { Evaluation, putConnectApplicant } from '@/components/admin/applicants/api/applicants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { clubMemberKey } from './queries/key';

interface useConnectApplicantParams {
  clubId: string;
  evaluation: Evaluation;
}

export const useConnectApplicant = ({
  openConfirmModalWithMessage,
}: {
  openConfirmModalWithMessage: (message: string) => void;
}) => {
  const queryClient = useQueryClient();
  const { clubMember } = clubMemberKey;

  const connectApplicantsMutations = useMutation({
    mutationFn: ({ clubId, evaluation }: useConnectApplicantParams) =>
      putConnectApplicant(clubId, evaluation),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [clubMember] });
      openConfirmModalWithMessage('연동이 완료되었습니다.');
    },
  });

  const handleConnectApplicants = ({ clubId, evaluation }: useConnectApplicantParams) => {
    connectApplicantsMutations.mutate({ clubId, evaluation });
  };

  return {
    handleConnectApplicants,
  };
};
