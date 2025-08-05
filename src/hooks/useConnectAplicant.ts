import { Evaluation, putConnectApplicant } from '@/components/admin/applicants/api/applicants';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { applicantKey, clubMemberKey } from './queries/key';

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
  const { applicantList, passList, failList, searchApplicant } = applicantKey;

  const connectApplicantsMutations = useMutation({
    mutationFn: ({ clubId, evaluation }: useConnectApplicantParams) =>
      putConnectApplicant(clubId, evaluation),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [clubMember] });
      queryClient.invalidateQueries({ queryKey: [applicantList] });
      queryClient.invalidateQueries({ queryKey: [passList] });
      queryClient.invalidateQueries({ queryKey: [failList] });
      queryClient.invalidateQueries({ queryKey: [searchApplicant] });
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
