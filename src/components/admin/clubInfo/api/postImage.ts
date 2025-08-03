import { adminClient } from '@/common/apis/ttockTtockClient';

export const postImage = async (file: File, clubId: string) => {
  const formData = new FormData();
  formData.append('iamge', file);
  const data = await adminClient.post(`/clubs/${clubId}/update-image`, formData);

  return data;
};
