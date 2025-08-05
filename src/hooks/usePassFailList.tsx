import { useInfiniteQuery } from '@tanstack/react-query';
import { applicantKey } from './queries/key';
import {
  ApplicantListParams,
  getFailList,
  getPassList,
} from '@/components/admin/applicants/api/applicants';
import { ApplicantsInfo } from '@/common/model/applicants';

interface UseApplicantListParams {
  selectedOptions: ApplicantListParams;
  enabled?: boolean;
}

export const usePassList = ({ selectedOptions, enabled }: UseApplicantListParams) => {
  const { passList } = applicantKey;
  const { evaluation } = selectedOptions;

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch, isLoading } =
    useInfiniteQuery<ApplicantsInfo, Error>({
      queryKey: [passList, selectedOptions],
      queryFn: ({ pageParam }) =>
        getPassList({
          evaluation: evaluation,
          page: pageParam as number,
          size: 70,
        }),
      initialPageParam: undefined,
      getNextPageParam: (lastPage) => {
        const isLastPage = lastPage.totalPage === lastPage.currentPage;
        return isLastPage ? null : lastPage.currentPage + 1;
      },
      enabled,
    });
  const passApplicants = data ? data.pages.flatMap((page) => page.applicants) : [];
  const hasInterview = data?.pages[0]?.hasInterview ?? false;
  return {
    passApplicants,
    hasInterview,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    refetch,
  };
};

export const useFailList = ({ selectedOptions, enabled }: UseApplicantListParams) => {
  const { failList } = applicantKey;
  const { evaluation } = selectedOptions;

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch, isLoading } =
    useInfiniteQuery<ApplicantsInfo, Error>({
      queryKey: [failList, selectedOptions],
      queryFn: ({ pageParam }) =>
        getFailList({
          evaluation: evaluation,
          page: pageParam as number,
          size: 70,
        }),
      initialPageParam: undefined,
      getNextPageParam: (lastPage) => {
        const isLastPage = lastPage.totalPage === lastPage.currentPage;
        return isLastPage ? null : lastPage.currentPage + 1;
      },
      enabled,
    });

  const failApplicants = data ? data.pages.flatMap((page) => page.applicants) : [];

  return { failApplicants, fetchNextPage, hasNextPage, isFetchingNextPage, refetch, isLoading };
};
