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

// 동아리 정보 화면용. 지원서가 있으면 서버가 시작일 변경을 거절한다.
// 폼이 없거나 조회에 실패해도 화면을 막지 않고 false로 둔다
export const useHasApplicants = (clubId: string) => {
  const { adminFormInfo } = applicationFormKey;

  const { data } = useQuery<QuestionStepForm>({
    queryKey: [adminFormInfo],
    queryFn: () => getFormInfo(clubId),
    enabled: !!clubId,
    throwOnError: false,
    retry: false,
  });
  return !!data?.hasApplicants;
};
