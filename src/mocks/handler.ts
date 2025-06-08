import { http, HttpResponse } from 'msw';
//test
export const handlers = [
  http.get(`${process.env.NEXT_PUBLIC_API_URL}/posts/1`, () => {
    return HttpResponse.json({
      title: 'hyungjun',
    });
  }),
];
