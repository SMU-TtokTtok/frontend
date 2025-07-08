import { adminClient } from '@/common/apis/ttockTtockClient';
import { ApplicationForm } from '@/common/model/applicationForm';

export const getFormInfo = async () => {
  const data = await adminClient.get<ApplicationForm>(`/applicationForm`);

  return data;
};
