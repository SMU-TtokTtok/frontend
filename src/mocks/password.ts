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

export const verifyResetCodeHandler = http.post(
  '/api/user/auth/verify-email',
  async ({ request }) => {
    const body = (await request.json()) as { email?: string; code?: string };
    const { email, code } = body;
    if (email && code) {
      return HttpResponse.json({ success: true, message: '인증 성공!' });
    }
    return HttpResponse.json(
      { success: false, message: '이메일과 인증코드를 모두 입력해 주세요.' },
      { status: 400 },
    );
  },
);
