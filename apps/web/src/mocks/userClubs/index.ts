import clubList from '../clubList.json';
import { http, HttpResponse } from 'msw';

export const favortesClubs = http.get(`/api/favorites`, () => {
  return HttpResponse.json(clubList, { status: 200 });
});

export const appliedClubs = http.get(`/api/user/applies/history`, () => {
  return HttpResponse.json(clubList, { status: 200 });
});

export const searchClubs = http.get(`/api/clubs/search`, () => {
  return HttpResponse.json(clubList, { status: 200 });
});

export const popularTotalClubs = http.get(`/api/clubs/popular`, () => {
  return HttpResponse.json(clubList, { status: 200 });
});
