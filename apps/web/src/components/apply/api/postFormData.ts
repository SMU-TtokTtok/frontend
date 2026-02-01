import { mainClient } from '@/common/apis/ttockTtockClient';

export const postFormTempData = async (body: FormData, formId: string) => {
  const data = await mainClient.post(`/api/user/temp-applicant/${formId}`, body);
  return data;
};
