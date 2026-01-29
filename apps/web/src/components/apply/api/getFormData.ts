import { mainClient } from '@/common/apis/ttockTtockClient';
import { getTempData } from '@/common/model/form';

export async function gethFormData(formId: string): Promise<getTempData> {
  const res = await mainClient.get(`/api/user/temp-applicant/${formId}`);

  return res;
}
