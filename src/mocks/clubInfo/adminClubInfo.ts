import { http, HttpResponse } from 'msw';
import clubInformation from './adminClubInfo.json';

export const getClubInfo = http.get('/api/admin/clubs/1/content', () => {
  return HttpResponse.json(clubInformation);
});

export const patchRecruiting = http.patch('/api/admin/clubs/1/toggle-recruitment', async () => {
  return HttpResponse.json({ success: true }, { status: 200 });
});

export const patchClubInfo = http.patch('/api/admin/club-info', async ({}) => {});
