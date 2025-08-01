import { z } from 'zod';

export const passwordSchema = z
  .object({
    studentId: z.string().min(1, '학번을 입력해주세요.'),
    // .regex(/^\d{9}$/, '9자리 학번을 입력해주세요.'),
    code: z.string().min(1, '인증코드를 입력해 주세요.'),
    password: z
      .string()
      .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
      .regex(/[!@#$%^&*(),.?\":{}|<>]/, '특수문자를 포함해야 합니다.'),
    passwordConfirm: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordConfirm'],
  });

export type PasswordFormType = z.infer<typeof passwordSchema>;
