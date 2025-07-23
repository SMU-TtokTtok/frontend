'use client';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { QuestionStepForm } from '@/common/model/applicationForm';
import { patchApplicantForm } from '@/components/admin/applicationForm/api/applicationForm';
import { applicationFormKey } from './queries/key';
export const useUpdateFormMutation = () => {
  const queryClient = useQueryClient();
  const { adminFormInfo } = applicationFormKey;
  const updateFormMutation = useMutation({
    mutationFn: async (formData: QuestionStepForm) => {
      // clubId로 대체 해야합니다 by 형준
      const response = await patchApplicantForm(1, formData);
      return response;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [adminFormInfo] });
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
