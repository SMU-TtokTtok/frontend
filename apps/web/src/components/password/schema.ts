import { z } from 'zod';

export const passwordSchema = z
  .object({
    studentId: z
      .string()
      .min(1, '학번을 입력해주세요.')
      .regex(/^\d{9}$/, '9자리 학번을 입력해주세요.'),
    code: z.string().min(1, '인증코드를 입력해 주세요.'),
    password: z
      .string()
      .min(8, '비밀번호는 최소 8자 이상이어야 합니다.')
      .max(20, '비밀번호는 최대 20자까지 가능합니다.')
      .refine((val) => !/[가-힣]/.test(val), {
        message: '한글은 입력할 수 없습니다.',
      })
      .refine((val) => /[a-z]/.test(val), {
        message: '소문자를 포함해야 합니다.',
      })
      .refine((val) => /[A-Z]/.test(val), {
        message: '대문자를 포함해야 합니다.',
      })
      .refine((val) => /\d/.test(val), {
        message: '숫자를 포함해야 합니다.',
      })
      .refine((val) => /[!@#$%^&*(),.?":{}|<>]/.test(val), {
        message: '특수문자를 포함해야 합니다.',
      }),
    passwordConfirm: z.string().min(1, '비밀번호 재입력을 해주세요.'),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordConfirm'],
  });

export type PasswordFormType = z.infer<typeof passwordSchema>;
