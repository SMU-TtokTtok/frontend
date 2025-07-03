import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { applicantKey } from './queries/key';
import {
  getApplicantList,
  ApplicantListParams,
  patchApplicantStatus,
} from '@/components/admin/applicants/api/applicants';

interface UseApplicantListParams {
  selectedOptions: ApplicantListParams;
}

export const useApplicantList = ({ selectedOptions }: UseApplicantListParams) => {
  const { applicantList } = applicantKey;

  const { data, isLoading } = useSuspenseQuery({
    queryKey: [applicantList, selectedOptions],
    queryFn: () => getApplicantList(),
  });
  return { data, isLoading };
};

interface usePatchApplicantParams {
  applicantId: number;
  status: string;
}

export const usePatchApplicantStatus = () => {
  const queryClient = useQueryClient();
  const { applicantList, passList, failList } = applicantKey;

  const favoriteMutation = useMutation({
    mutationFn: ({ applicantId, status }: usePatchApplicantParams) =>
      patchApplicantStatus(applicantId, status),
    onSuccess: () => {
      alert('상태가 변경되었습니다.'); //모달 만들어지면 대체할게요! by 형준
      queryClient.invalidateQueries({ queryKey: [applicantList, passList, failList] });
    },
  });

  const handleFavoriteStatus = ({ applicantId, status }: usePatchApplicantParams) => {
    favoriteMutation.mutate({ applicantId, status });
  };

  return {
    handleFavoriteStatus,
  };
};
