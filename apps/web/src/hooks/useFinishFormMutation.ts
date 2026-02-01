'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postFinishForm } from '@/components/admin/applicants/api/applicants';
import { CustomHttpError } from '@/common/apis/apiClient';
import { applicantKey, applicationFormKey } from './queries/key';

export const useFinishFormMutation = () => {
  const queryClient = useQueryClient();
  const { applicantList, searchApplicant, passList, failList } = applicantKey;
  const { adminFormInfo } = applicationFormKey;
  const finishFormMutation = useMutation({
    mutationFn: async (formId: string) => {
      const response = await postFinishForm(formId);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [applicantList] });
      queryClient.invalidateQueries({ queryKey: [searchApplicant] });
      queryClient.invalidateQueries({ queryKey: [passList] });
      queryClient.invalidateQueries({ queryKey: [failList] });
      queryClient.invalidateQueries({ queryKey: [adminFormInfo] });
    },
    onError: (error) => {
      const customError = error as CustomHttpError;
      if (customError.status !== 401) {
        alert('지원자 평가 종료에 실패했습니다.');
      }
    },
  });

  const handleFinishForm = (formId: string, onSuccess?: () => void) => {
    finishFormMutation.mutate(formId, {
      onSuccess: () => {
        onSuccess?.();
      },
    });
  };

  return {
    finishFormMutation,
    handleFinishForm,
  };
};
