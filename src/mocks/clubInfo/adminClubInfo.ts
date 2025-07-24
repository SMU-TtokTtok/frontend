import { http, HttpResponse } from 'msw';
import clubInformation from './adminClubInfo.json';

export const getClubInfo = http.get('/api/admin/club/intro', () => {
  return HttpResponse.json(clubInformation);
});

// type ClubInfo = typeof clubInformation;

// 동아리 정보 저장소 (실제로는 서버 DB에 저장됨)
// let isRecruiting = true;
// let clubInfoData: ClubInfo = { ...clubInformation };

export const patchRecruiting = http.patch('/api/admin/club/recruiting', async ({ request }) => {
  const body = (await request.json()) as { isRecruiting?: boolean };
  if (typeof body.isRecruiting === 'boolean') {
    return HttpResponse.json({ success: true, isRecruiting: body.isRecruiting });
  }
  return HttpResponse.json({ success: false }, { status: 400 });
});

// export const patchClubInfo = http.patch('/api/club-info', async ({ request }) => {
//   const body = await request.json();
//   const safeBody = typeof body === 'object' && body !== null ? body : {};
//   clubInfoData = { ...clubInfoData, ...safeBody };
//   return HttpResponse.json({ success: true, ...clubInfoData });
// });

export const patchClubInfo = http.patch('/api/admin/club-info', async ({}) => {});
