'use client';

import { useInfiniteQuery } from '@tanstack/react-query';
import { applicantKey } from './queries/key';
import { Evaluation, getApplicantSearchList } from '@/components/admin/applicants/api/applicants';
import { ApplicantsInfo } from '@/common/model/applicants';
interface useSearchApplicantParams {
  debouncedSearch: string;
  evaluation: Evaluation;
  enabled?: boolean;
}

export const useSearchApplicant = ({
  debouncedSearch,
  evaluation,
  enabled,
}: useSearchApplicantParams) => {
  const { searchApplicant } = applicantKey;

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch, isLoading } =
    useInfiniteQuery<ApplicantsInfo, Error>({
      queryKey: [searchApplicant, debouncedSearch],
      queryFn: ({ pageParam }) =>
        getApplicantSearchList({ debouncedSearch, evaluation, cursor: pageParam as number }),
      initialPageParam: undefined,
      getNextPageParam: (lastPage) => {
        const isLastPage = lastPage.totalPage === lastPage.currentPage;
        return isLastPage ? null : lastPage.currentPage + 1;
      },
      enabled,
    });
  const applicants = data ? data.pages.flatMap((page) => page.applicants) : [];

  return { applicants, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage, refetch };
};
