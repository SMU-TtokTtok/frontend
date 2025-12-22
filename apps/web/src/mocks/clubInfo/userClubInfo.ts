import { http, HttpResponse } from 'msw';
import clubInfo from './userClubInfo.json';

const BASE_API = process.env.NEXT_PUBLIC_API_URL ?? '';

export const getUserClubInfo = http.get(`${BASE_API}/api/clubs/:clubId/content`, () => {
  return HttpResponse.json(clubInfo, { status: 200 });
});
