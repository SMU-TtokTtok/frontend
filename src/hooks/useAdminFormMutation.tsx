'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QuestionStepForm } from '@/common/model/applicationForm';
import { patchApplicantForm } from '@/components/admin/applicationForm/api/applicationForm';
import { applicationFormKey } from './queries/key';
import { CustomHttpError } from '@/common/apis/apiClient';
export const useUpdateFormMutation = () => {
  const queryClient = useQueryClient();
  const { adminFormInfo } = applicationFormKey;
  const updateFormMutation = useMutation({
    mutationFn: async (formData: QuestionStepForm) => {
      const response = await patchApplicantForm(formData.formId!, formData);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [adminFormInfo] });
    },
    onError: (error) => {
      const customError = error as CustomHttpError;
      if (customError.status !== 401) {
        alert('수정에 실패했습니다.');
      }
    },
  });

  const handleUpdateForm = (data: QuestionStepForm, handleModalOpen: () => void) => {
    updateFormMutation.mutate(data, {
      onSuccess: () => {
        handleModalOpen();
      },
    });
  };

  return {
    handleUpdateForm,
  };
};
