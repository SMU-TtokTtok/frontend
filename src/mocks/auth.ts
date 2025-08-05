import { http, HttpResponse } from 'msw';
const API = process.env.NEXT_PUBLIC_API_URL ?? '';

export const AdminLogin = http.post(`${API}/api/admin/auth/login`, async ({ request }) => {
  const { login, password } = (await request.json()) as { login: string; password: string };
  if (login === 'admin' && password === 'password') {
    return HttpResponse.json({ accessToken: 'abc' }, { status: 200 });
  }
  return HttpResponse.json({ message: '로그인 실패' }, { status: 401 });
});

export const AdminLogout = http.post(`${API}/api/admin/auth/logout`, async () => {
  return HttpResponse.json({ message: '로그아웃 성공' }, { status: 200 });
});

export const AdminRefresh = http.post(`${API}/api/admin/auth/re-issue`, async () => {
  return HttpResponse.json({ accessToken: 'new_access_token' }, { status: 200 });
});

export const AdminProfile = http.get(`${API}/api/admin/auth/info`, async () => {
  return HttpResponse.json(
    {
      clubId: 'club-001',
      clubName: '멋쟁이사자처럼',
    },

    { status: 200 },
  );
});
