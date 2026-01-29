import { mainClient } from '@/common/apis/ttockTtockClient';
import { getTempData } from '@/common/model/form';

export async function getFormData(formId: string): Promise<getTempData> {
  // 빈 formId인 경우 빈 응답 반환
  if (!formId || formId.trim() === '') {
    return { hasTempData: false, data: null };
  }
  const res = await mainClient.get(`/api/user/temp-applicant/${formId}`);

  return res;
}
