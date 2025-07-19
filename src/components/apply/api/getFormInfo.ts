import { mainClient } from '@/common/apis/ttockTtockClient';
import { getForm } from '@/common/model/form';

export async function gethFormInfo(clubId: string): Promise<getForm> {
  const res = await mainClient.get(`/api/club/${clubId}/form`);

  return res;
}
