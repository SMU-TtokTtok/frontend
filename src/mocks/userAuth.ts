import { http, HttpResponse } from 'msw';

export const userLoginHandler = http.post('/api/user/auth/login', async ({ request }) => {
  const body = (await request.json()) as { email?: string; password?: string };
  const { email, password } = body;
  if (email && password) {
    return HttpResponse.json({ success: true, message: '로그인 성공!' });
  }
  return HttpResponse.json(
    { success: false, message: '이메일과 비밀번호를 모두 입력해 주세요.' },
    { status: 400 },
  );
});
