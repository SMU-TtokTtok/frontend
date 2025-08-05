import { adminClient } from '@/common/apis/ttockTtockClient';
import { QuestionStepForm } from '@/common/model/applicationForm';

export const postApplicantForm = async (clubId: string, formData: QuestionStepForm) => {
  const data = await adminClient.post(`/forms/clubs/${clubId}`, formData);
  return data;
};
