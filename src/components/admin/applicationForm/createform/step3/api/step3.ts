import { adminClient } from '@/common/apis/ttockTtockClient';
import { ApplicationForm } from '@/common/model/applicationForm';

export const postApplicantForm = async (clubId: number, formData: ApplicationForm) => {
  const data = await adminClient.post(`/forms/clubs/${clubId}`, formData);
  return data;
};
