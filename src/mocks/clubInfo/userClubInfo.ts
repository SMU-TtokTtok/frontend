import { http, HttpResponse } from 'msw';
import clubInfo from './userClubInfo.json';

export const getUserClubInfo = http.get('/api/clubs/:clubId/content', () => {
  return HttpResponse.json(clubInfo);
});
