import { z } from 'zod';

export const loginSchema = z.object({
  studentId: z
    .string()
    .min(1, '학번을 입력해주세요.')
    .regex(/^\d{9}$/, '9자리 학번을 입력해주세요.'),
  password: z.string().min(1, '비밀번호를 입력해주세요.'),
  rememberMe: z.boolean(),
});

export type LoginForm = z.infer<typeof loginSchema>;
