import { http, HttpResponse } from 'msw';
import popularClubList from './popularClubList.json';
import clubList from './clubList.json';
const API = process.env.NEXT_PUBLIC_API_URL ?? '';

export const popularClubs = http.get(`${API}/popular`, () => {
  return HttpResponse.json(popularClubList, { status: 200 });
});

export const Clubs = http.get(`${API}/clubs`, () => {
  return HttpResponse.json(clubList, { status: 200 });
});

export const patchFavorite = http.patch(`${API}/favorite/:id`, () => {
  return HttpResponse.json(
    { message: '즐겨찾기 상태가 수정되었습니다.' },
    {
      status: 200,
    },
  );
});
