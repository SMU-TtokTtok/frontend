import { http, HttpResponse } from 'msw';
import clubInfo from './userClubInfo.json';

export const getUserClubInfo = http.get('/api/club/:clubId', () => {
  return HttpResponse.json(clubInfo);
});
