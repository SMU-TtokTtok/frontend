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

export const resetPasswordHandler = http.post(
  '/api/user/auth/reset-password',
  async ({ request }) => {
    const body = (await request.json()) as {
      email?: string;
      verificationCode?: string;
      newPassword?: string;
      newPasswordConfirm?: string;
    };
    const { email, verificationCode, newPassword, newPasswordConfirm } = body;
    if (email && verificationCode && newPassword && newPasswordConfirm) {
      if (newPassword === newPasswordConfirm) {
        return HttpResponse.json({ success: true, message: '비밀번호 재설정 성공!' });
      } else {
        return HttpResponse.json(
          { success: false, message: '비밀번호와 비밀번호 확인이 일치하지 않습니다.' },
          { status: 400 },
        );
      }
    }
    return HttpResponse.json(
      { success: false, message: '모든 값을 입력해 주세요.' },
      { status: 400 },
    );
  },
);
