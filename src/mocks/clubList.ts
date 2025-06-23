import { http, HttpResponse } from 'msw';
import popularClubList from './popularClubList.json';
import clubList from './clubList.json';

export const popularClubs = http.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/1`, () => {
  return HttpResponse.json(popularClubList, { status: 200 });
});

export const Clubs = http.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/2`, () => {
  return HttpResponse.json(clubList, { status: 200 });
});

export const patchFavorite = http.patch(`${process.env.NEXT_PUBLIC_API_URL}/posts/1/`, () => {
  return HttpResponse.json(
    { message: '즐겨찾기 상태가 수정되었습니다.' },
    {
      status: 200,
    },
  );
});
