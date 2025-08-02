import { useInfiniteQuery, useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { applicantKey } from './queries/key';
import {
  getApplicantList,
  ApplicantListParams,
  patchApplicantStatus,
  getApplicantInfo,
  Evaluation,
} from '@/components/admin/applicants/api/applicants';
import { ApplicantsInfo } from '@/common/model/applicants';

interface UseApplicantListParams {
  selectedOptions: ApplicantListParams;
  enabled?: boolean;
}

export const useApplicantList = ({ selectedOptions, enabled }: UseApplicantListParams) => {
  const { applicantList } = applicantKey;
  const { evaluation, sort, isEvaluating } = selectedOptions;

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch, isLoading } =
    useInfiniteQuery<ApplicantsInfo, Error>({
      queryKey: [applicantList, selectedOptions],
      queryFn: ({ pageParam }) =>
        getApplicantList({
          evaluation: evaluation,
          sort: sort,
          isEvaluating: isEvaluating,
          cursor: pageParam as number,
        }),
      initialPageParam: undefined,
      getNextPageParam: (lastPage) => {
        const isLastPage = lastPage.totalPage === lastPage.currentPage;
        return isLastPage ? null : lastPage.currentPage + 1;
      },
      enabled,
    });
  const applicants = data ? data.pages.flatMap((page) => page.applicants) : [];

  return { applicants, fetchNextPage, hasNextPage, isFetchingNextPage, refetch, isLoading };
};

interface usePatchApplicantParams {
  applicantId: string;
  status: string;
  evaluation: Evaluation;
}

export const usePatchApplicantStatus = ({
  openConfirmModalWithMessage,
}: {
  openConfirmModalWithMessage: (message: string) => void;
}) => {
  const queryClient = useQueryClient();
  const { applicantList, passList, failList } = applicantKey;

  const favoriteMutation = useMutation({
    mutationFn: ({ applicantId, status, evaluation }: usePatchApplicantParams) =>
      patchApplicantStatus({ applicantId, status, evaluation }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [applicantList, passList, failList] });
      openConfirmModalWithMessage('지원자의 상태가 변경되었습니다.');
    },
  });

  const handleFavoriteStatus = ({ applicantId, status, evaluation }: usePatchApplicantParams) => {
    favoriteMutation.mutate({ applicantId, status, evaluation });
  };

  return {
    handleFavoriteStatus,
  };
};

export const useApplicantInfo = (applicantId: string) => {
  const { applicantInfo } = applicantKey;

  const { data, isLoading } = useQuery({
    queryKey: [applicantInfo, applicantId],
    queryFn: () => getApplicantInfo(applicantId),
  });

  return { data, isLoading };
};
