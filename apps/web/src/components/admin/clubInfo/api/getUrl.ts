import { adminClient } from '@/common/apis/ttockTtockClient';

export const getImageUrl = async (imageKey: string) => {
  const data = await adminClient.get(`/clubs/image?imageKey=${imageKey}`);

  return data;
};
