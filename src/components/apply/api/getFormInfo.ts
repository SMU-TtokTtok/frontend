import { mainClient } from '@/common/apis/ttockTtockClient';
import { getForm } from '@/common/model/form';

export async function gethFormInfo(clubId: number): Promise<getForm> {
  const res = await mainClient.get(`/api/forms/${clubId}`);

  return res;
}
