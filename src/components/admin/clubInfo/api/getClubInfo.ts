import { adminClient } from '@/common/apis/ttockTtockClient';
import { AdminClubIntro } from '@/common/model/clubIntro';

export const getAdminClubInfo = async () => {
  const data = await adminClient.get<AdminClubIntro>(`/club`);

  return data;
};
