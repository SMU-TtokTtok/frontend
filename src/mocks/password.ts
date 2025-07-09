import { http, HttpResponse } from 'msw';

export const emailCheckHandler = http.post(
  '/api/user/auth/send-reset-code',
  async ({ request }) => {
    const body = (await request.json()) as { email?: string };
    const email = body.email;
    if (email) {
      return HttpResponse.json({ success: true, message: '인증 코드를 전송했습니다' });
    }
    return HttpResponse.json(
      { success: false, message: '인증 코드 전송을 실패했습니다' },
      { status: 400 },
    );
  },
);
