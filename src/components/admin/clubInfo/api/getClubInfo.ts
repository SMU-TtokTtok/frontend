import { adminClient } from '@/common/apis/ttockTtockClient';
import { AdminClubIntro } from '@/common/model/clubIntro';

export const getAdminClubInfo = async () => {
  const clubId = 1;

  const data = await adminClient.get<AdminClubIntro>(`/clubs/${clubId}/content`);

  return data;
};
