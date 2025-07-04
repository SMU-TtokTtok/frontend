'use client';

import { useSuspenseQuery } from '@tanstack/react-query';
import { applicationFormKey } from './queries/key';
import { getFormInfo } from '@/components/admin/applicationForm/api/applicationForm';

export const useAdminForm = () => {
  const { adminFormInfo } = applicationFormKey;

  const { data, isLoading } = useSuspenseQuery({
    queryKey: [adminFormInfo],
    queryFn: () => getFormInfo(),
  });
  return { data, isLoading };
};
