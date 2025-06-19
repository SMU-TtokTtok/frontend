import { http, HttpResponse } from 'msw';
import popularClubList from './popularClubList.json';
export const popularClubs = http.get(
  `${process.env.NEXT_PUBLIC_API_URL}/posts/1`,
  () => {
    return HttpResponse.json(popularClubList, { status: 200 });
  }
);

export const patchFavorite = http.patch(
  `${process.env.NEXT_PUBLIC_API_URL}/posts/1/`,
  () => {
    return HttpResponse.json(
      { message: '즐겨찾기 상태가 수정되었습니다.' },
      {
        status: 200,
      }
    );
  }
);
