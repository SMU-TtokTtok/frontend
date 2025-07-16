import { mainClient } from '@/common/apis/ttockTtockClient';
import { AdminClubIntro } from '@/common/model/clubIntro';

export const getAdminClubInfo = async () => {
  const data = await mainClient.get<AdminClubIntro>(`/api/admin/club`);

  return data;
};
