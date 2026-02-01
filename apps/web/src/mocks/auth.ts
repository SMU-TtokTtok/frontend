import { http, HttpResponse } from 'msw';
const API = process.env.NEXT_PUBLIC_API_URL ?? '';

export const AdminLogin = http.post(`${API}/api/admin/auth/login`, async ({ request }) => {
  const { login, password } = (await request.json()) as { login: string; password: string };
  if (login === 'admin' && password === 'password') {
    return HttpResponse.json({ accessToken: 'abc' }, { status: 200 });
  }
  return HttpResponse.json({ message: '로그인 실패' }, { status: 401 });
});

export const AdminSignup = http.post(`${API}/api/admin/auth/join`, async ({ request }) => {
  const { username, password, clubName, clubUniv } = (await request.json()) as {
    username: string;
    password: string;
    clubName: string;
    clubUniv: string;
  };

  // 간단한 유효성 검사
  if (!username || !password || !clubName || !clubUniv) {
    return HttpResponse.json({ message: '모든 필드를 입력해주세요.' }, { status: 400 });
  }

  return HttpResponse.json(
    {
      success: true,
      message: '회원가입이 완료되었습니다.',
    },
    { status: 200 },
  );
});

export const AdminLogout = http.post(`${API}/api/admin/auth/logout`, async () => {
  return HttpResponse.json({ message: '로그아웃 성공' }, { status: 200 });
});

export const AdminRefresh = http.post(`${API}/api/admin/auth/re-issue`, async () => {
  return HttpResponse.json({ accessToken: 'new_access_token' }, { status: 401 });
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
