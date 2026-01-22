'use client';

import { useQuery } from '@tanstack/react-query';
import { applicationFormKey } from './queries/key';
import { getFormInfo } from '@/components/admin/applicationForm/api/applicationForm';
import { QuestionStepForm } from '@/common/model/applicationForm';

export const useAdminForm = (clubId: string) => {
  const { adminFormInfo } = applicationFormKey;

  const { data, isLoading } = useQuery<QuestionStepForm>({
    queryKey: [adminFormInfo],
    queryFn: () => getFormInfo(clubId),
    enabled: !!clubId,
  });
  return { data, isLoading };
};
