import { z } from 'zod';

export const passwordSchema = z
  .object({
    email: z
      .string()
      .email('올바른 이메일 형식이 아닙니다.')
      .regex(/^[0-9]{2}\d{7}@sangmyung\\.kr$/, '학교 이메일 형식이 아닙니다.'),
    code: z.string().min(6, '인증코드는 6자리여야 합니다.').max(6, '인증코드는 6자리여야 합니다.'),
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
