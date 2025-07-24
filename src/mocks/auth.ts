import { http, HttpResponse } from 'msw';
const API = process.env.NEXT_PUBLIC_API_URL ?? '';

export const AdminLogin = http.post(`${API}/api/admin/auth/login`, async ({ request }) => {
  const { login, password } = (await request.json()) as { login: string; password: string };
  if (login === 'admin' && password === 'password') {
    return HttpResponse.json({ accessToken: 'abc' }, { status: 200 });
  }
  return HttpResponse.json({ message: '로그인 실패' }, { status: 401 });
});
