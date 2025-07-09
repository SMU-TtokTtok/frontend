'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { applicantKey } from './queries/key';
import { getApplicantSearchList } from '@/components/admin/applicants/api/applicants';
interface useSearchApplicantParams {
  debouncedSearch: string;
  evaluation: string;
}

export const useSearchApplicant = ({ debouncedSearch, evaluation }: useSearchApplicantParams) => {
  const { searchApplicant } = applicantKey;

  const { data, isLoading } = useSuspenseQuery({
    queryKey: [searchApplicant, debouncedSearch],
    queryFn: () => getApplicantSearchList(debouncedSearch, evaluation),
  });
  return { data, isLoading };
};
