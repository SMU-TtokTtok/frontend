import { http, HttpResponse } from 'msw';
import popularClubList from './popularClubList.json';
import clubList from './clubList.json';
import { API } from '@/common/constants/endpoints';
const BASEAPI = process.env.NEXT_PUBLIC_API_URL ?? '';

export const popularClubs = http.get(`${BASEAPI}/popular`, () => {
  return HttpResponse.json(popularClubList, { status: 200 });
});

export const Clubs = http.get(`${BASEAPI}${API.USER.CLUBS}`, () => {
  return HttpResponse.json(clubList, { status: 200 });
});

export const patchFavorite = http.patch(`${BASEAPI}/favorite/:id`, () => {
  return HttpResponse.json(
    { message: '즐겨찾기 상태가 수정되었습니다.' },
    {
      status: 200,
    },
  );
});

export const getSearchList = http.get(`${BASEAPI}/clubs/search`, ({ request }) => {
  const url = new URL(request.url);
  const name = url.searchParams.get('name') || '';
  const sort = url.searchParams.get('sort') || 'latest';

  const filteredClubs = clubList.filter((club) =>
    club.name.toLowerCase().includes(name.toLowerCase()),
  );

  return HttpResponse.json(filteredClubs, { status: 200 });
});
