import { mainClient } from '@/common/apis/ttockTtockClient';
import { ApplicationForm } from '@/common/model/applicationForm';

export const getFormInfo = async () => {
  const data = await mainClient.get<ApplicationForm>(`/applicationForm`);

  return data;
};
