'use client';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/common/constants/routes';
import { QuestionStepForm } from '@/common/model/applicationForm';
import { postApplicantForm } from '@/components/admin/applicationForm/createform/step3/api/step3';

export const useCreateFormMutation = () => {
  const router = useRouter();

  const createFormMutation = useMutation({
    mutationFn: async (formData: QuestionStepForm) => {
      // clubId로 대체 해야합니다 by 형준
      const response = await postApplicantForm(1, formData);
      return response;
    },
    onSuccess: () => {
      router.push(`${ROUTES.ADMIN_APPLICATIONS_CREATE}?step=4`);
    },
  });

  const handleCreateForm = (data: QuestionStepForm) => {
    createFormMutation.mutate(data);
  };

  return {
    handleCreateForm,
  };
};
