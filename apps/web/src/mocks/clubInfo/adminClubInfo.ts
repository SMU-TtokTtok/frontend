import { http, HttpResponse } from 'msw';
import clubInformation from './adminClubInfo.json';

const BASE_API = process.env.NEXT_PUBLIC_API_URL ?? '';

export const getClubInfo = http.get(`${BASE_API}/api/admin/clubs/:clubId/content`, () => {
  return HttpResponse.json(clubInformation, { status: 200 });
});

export const patchRecruiting = http.patch(
  `${BASE_API}/api/admin/clubs/:clubId/toggle-recruitment`,
  async () => {
    return HttpResponse.json({ success: true }, { status: 200 });
  },
);

export const patchClubInfo = http.patch(`${BASE_API}/api/admin/clubs/:clubId/content`, async () => {
  return HttpResponse.json({ success: true }, { status: 200 });
});

export const postImage = http.post(`${BASE_API}/api/admin/clubs/:clubId/update-image`, async () => {
  return HttpResponse.json(
    {
      imgKey: 'mock-admin-club-profile',
      url: '/mainlogo.png',
    },
    { status: 200 },
  );
});

export const getImage = http.get(`${BASE_API}/api/admin/clubs/image`, ({ request }) => {
  const url = new URL(request.url);
  const imageKey = url.searchParams.get('imageKey') ?? 'mock-admin-club-profile';

  return HttpResponse.json(
    {
      imageKey,
      url: '/mainlogo.png',
    },
    { status: 200 },
  );
});
