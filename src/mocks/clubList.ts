import { http, HttpResponse } from 'msw';
import popularClubList from './popularClubList.json';
export const popularClubs = http.get(
  `${process.env.NEXT_PUBLIC_API_URL}/posts/popular`,
  () => {
    return HttpResponse.json(popularClubList, { status: 200 });
  }
);
