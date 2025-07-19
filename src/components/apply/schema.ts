import { z } from 'zod';

export const applyFormSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요.'),
  age: z.string().min(1, '나이를 입력해주세요.').regex(/^\d+$/, '숫자만 입력해주세요.'),
  major: z.string().min(1, '학과를 입력해주세요.'),
  email: z.string().min(1, '이메일을 입력해주세요.').email('올바른 이메일 형식이 아닙니다.'),
  phone: z
    .string()
    .min(1, '전화번호를 입력해주세요.')
    .regex(/^010-\d{4}-\d{4}$/, '올바른 전화번호 형식이 아닙니다. (예: 010-0000-0000)'),
  isStudent: z.enum(['true', 'false'], { required_error: '재학여부를 선택해주세요.' }),
  grade: z.enum(['1', '2', '3', '4'], { required_error: '현재 학년을 선택해주세요.' }),
  gender: z.enum(['true', 'false'], { required_error: '성별을 선택해주세요.' }),
});

export type ApplyFormData = z.infer<typeof applyFormSchema>;
