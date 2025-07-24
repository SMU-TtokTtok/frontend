import { adminClient } from '@/common/apis/ttockTtockClient';
import { QuestionStepForm } from '@/common/model/applicationForm';

export const getFormInfo = async (clubId: number) => {
  const data = await adminClient.get<QuestionStepForm>(`/forms/${clubId}`);

  return data;
};

export const patchApplicantForm = async (clubId: number, formData: QuestionStepForm) => {
  const data = await adminClient.patch<QuestionStepForm>(`/forms/${clubId}`, formData);

  return data;
};
