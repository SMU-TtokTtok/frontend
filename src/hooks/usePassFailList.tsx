import { useSuspenseQuery } from '@tanstack/react-query';
import { applicantDataKey } from './queries/key';
import {
  ApplicantListParams,
  getFailList,
  getPassList,
} from '@/components/admin/applicants/api/applicants';

interface UseApplicantListParams {
  selectedOptions: ApplicantListParams;
}

export const usePassList = ({ selectedOptions }: UseApplicantListParams) => {
  const { passList } = applicantDataKey;

  const { data, isLoading } = useSuspenseQuery({
    queryKey: [passList, selectedOptions],
    queryFn: () => getPassList(),
  });
  return { data, isLoading };
};

export const useFailList = ({ selectedOptions }: UseApplicantListParams) => {
  const { failList } = applicantDataKey;

  const { data, isLoading } = useSuspenseQuery({
    queryKey: [failList, selectedOptions],
    queryFn: () => getFailList(),
  });
  return { data, isLoading };
};
