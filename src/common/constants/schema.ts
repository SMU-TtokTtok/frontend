import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('올바른 이메일 형식을 입력하세요.'),
  password: z.string().min(1, '비밀번호를 입력해주세요.'),
});

export type LoginForm = z.infer<typeof loginSchema>;

export const signupSchema = z
  .object({
    email: z.string().email('올바른 이메일 형식을 입력해주세요.'),
    code: z.string().min(1, '인증코드를 입력해주세요.'),
    password: z.string().min(1, '비밀번호를 입력해주세요.'),
    confirmPassword: z.string().min(1, '비밀번호 재입력을 해주세요.'),
    name: z.string().min(1, '이름을 입력해주세요.'),
    agree: z.literal(true, {
      errorMap: () => ({ message: '약관에 동의하셔야 합니다.' }),
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmPassword'],
  });

export type SignupForm = z.infer<typeof signupSchema>;
