import { z } from 'zod';

export const signupSchema = z
  .object({
    studentId: z.string().min(1, '학번을 입력해주세요.'),
    //현재는 테스트 중이라 주석이나 추후에 주석제거 예정 by 현우
    // .regex(/^\d{9}$/, '9자리 학번을 입력해주세요.'),
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
