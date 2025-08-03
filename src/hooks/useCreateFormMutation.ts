'use client';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/common/constants/routes';
import { QuestionStepForm } from '@/common/model/applicationForm';
import { postApplicantForm } from '@/components/admin/applicationForm/createform/step3/api/step3';

export const useCreateFormMutation = () => {
  const router = useRouter();

  const createFormMutation = useMutation({
    mutationFn: async ({ clubId, formData }: { clubId: string; formData: QuestionStepForm }) => {
      const response = await postApplicantForm(clubId, formData);
      return response;
    },
    onSuccess: () => {
      router.push(`${ROUTES.ADMIN_APPLICATIONS_CREATE}?step=4`);
    },
  });

  const handleCreateForm = (clubId: string, formData: QuestionStepForm) => {
    createFormMutation.mutate({ clubId, formData });
  };

  return {
    handleCreateForm,
  };
};
