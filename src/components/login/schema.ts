import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('올바른 이메일 형식을 입력하세요.'),
  password: z.string().min(1, '비밀번호를 입력해주세요.'),
  rememberMe: z.boolean(),
});

export type LoginForm = z.infer<typeof loginSchema>;
