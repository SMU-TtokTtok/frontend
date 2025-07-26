import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { applicantKey } from './queries/key';
import {
  getApplicantList,
  ApplicantListParams,
  patchApplicantStatus,
  getApplicantInfo,
} from '@/components/admin/applicants/api/applicants';

interface UseApplicantListParams {
  selectedOptions: ApplicantListParams;
}

export const useApplicantList = ({ selectedOptions }: UseApplicantListParams) => {
  const { applicantList } = applicantKey;
  const { evaluation, sort, isEvaluating } = selectedOptions;

  const { data, isLoading } = useQuery({
    queryKey: [applicantList, selectedOptions],
    queryFn: () => getApplicantList({ evaluation, sort, isEvaluating }),
  });
  return { data, isLoading };
};

interface usePatchApplicantParams {
  applicantId: number;
  status: string;
}

export const usePatchApplicantStatus = ({ handleModalOpen }: { handleModalOpen: () => void }) => {
  const queryClient = useQueryClient();
  const { applicantList, passList, failList } = applicantKey;

  const favoriteMutation = useMutation({
    mutationFn: ({ applicantId, status }: usePatchApplicantParams) =>
      patchApplicantStatus(applicantId, status),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [applicantList, passList, failList] });
      handleModalOpen();
    },
  });

  const handleFavoriteStatus = ({ applicantId, status }: usePatchApplicantParams) => {
    favoriteMutation.mutate({ applicantId, status });
  };

  return {
    handleFavoriteStatus,
  };
};

export const useApplicantInfo = (applicantId: number) => {
  const { applicantInfo } = applicantKey;

  const { data, isLoading } = useQuery({
    queryKey: [applicantInfo, applicantId],
    queryFn: () => getApplicantInfo(applicantId),
  });

  return { data, isLoading };
};
