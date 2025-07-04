import { useSuspenseQuery } from '@tanstack/react-query';
import { applicantKey } from './queries/key';
import {
  ApplicantListParams,
  getFailList,
  getPassList,
} from '@/components/admin/applicants/api/applicants';

interface UseApplicantListParams {
  selectedOptions: ApplicantListParams;
}

export const usePassList = ({ selectedOptions }: UseApplicantListParams) => {
  const { passList } = applicantKey;

  const { data, isLoading } = useSuspenseQuery({
    queryKey: [passList, selectedOptions],
    queryFn: () => getPassList(),
  });
  return { data, isLoading };
};

export const useFailList = ({ selectedOptions }: UseApplicantListParams) => {
  const { failList } = applicantKey;

  const { data, isLoading } = useSuspenseQuery({
    queryKey: [failList, selectedOptions],
    queryFn: () => getFailList(),
  });
  return { data, isLoading };
};
