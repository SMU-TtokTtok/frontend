import { adminClient } from '@/common/apis/ttockTtockClient';

export const getExcel = async (clubId: string) => {
  const data = await adminClient.getBlob(`/members/${clubId}/download`);

  return data;
};
