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

export const userSignupHandler = http.post('/api/user/auth/signup', async ({ request }) => {
  const body = (await request.json()) as {
    email?: string;
    verificationCode?: string;
    password?: string;
    passwordConfirm?: string;
    name?: string;
    termsAgreed?: boolean;
  };
  const { email, verificationCode, password, passwordConfirm, name, termsAgreed } = body;
  if (email && verificationCode && password && passwordConfirm && name && termsAgreed) {
    if (password === passwordConfirm) {
      return HttpResponse.json({ success: true, message: '회원가입 성공!' });
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
});

export const userEmailPostHandler = http.post(
  '/api/user/auth/send-verification',
  async ({ request }) => {
    const body = (await request.json()) as { email?: string };
    const { email } = body;
    if (email) {
      return HttpResponse.json({ success: true, message: '인증코드를 전송하였습니다' });
    }
    return HttpResponse.json(
      { success: false, message: '이메일을 입력해 주세요.' },
      { status: 400 },
    );
  },
);
