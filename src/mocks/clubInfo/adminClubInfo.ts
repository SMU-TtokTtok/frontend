import { http, HttpResponse } from 'msw';
import clubInformation from './adminClubInfo.json';

export const getClubInfo = http.get('/api/admin/clubs/:clubId/content', () => {
  return HttpResponse.json(clubInformation);
});

export const patchRecruiting = http.patch(
  '/api/admin/clubs/:clubId/toggle-recruitment',
  async () => {
    return HttpResponse.json({ success: true }, { status: 200 });
  },
);

export const patchClubInfo = http.patch('/api/admin/clubs/:clubId/content', async () => {
  return HttpResponse.json({ success: true }, { status: 200 });
});

export const postImage = http.post('/api/admin/clubs/:clubId/update-image', async () => {
  return HttpResponse.json(
    {
      url: 'https://example.com/image.png',
    },
    { status: 200 },
  );
});

export const getImage = http.get('/api/admin/clubs/image', async () => {
  return HttpResponse.json(
    {
      url: 'https://example.com/image.png',
    },
    { status: 200 },
  );
});
