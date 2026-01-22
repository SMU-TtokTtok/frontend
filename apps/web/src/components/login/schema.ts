import { z } from 'zod';

export const loginSchema = z.object({
  studentId: z.string().min(1, '학번을 입력해주세요.'),
  //현재는 테스트 중이라 주석이나 추후에 주석제거 예정 by 현우
  // .regex(/^\d{9}$/, '9자리 학번을 입력해주세요.'),
  password: z.string().min(1, '비밀번호를 입력해주세요.'),
  rememberMe: z.boolean(),
});

export type LoginForm = z.infer<typeof loginSchema>;
