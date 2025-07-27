import { z } from 'zod';

export const clubMemberAddSchema = z.object({
  name: z.string().min(1, '이름을 입력해주세요.'),
  studentId: z.string().min(1, '학번을 입력해주세요.'),
  major: z.string().min(1, '학과를 입력해주세요.'),
  email: z.string().email('올바른 이메일 형식을 입력해주세요.'),
  phone: z.string().min(1, '전화번호를 입력해주세요.'),
  grade: z
    .string()
    .nullable()
    .refine((val) => val !== null, '학년을 선택해주세요.'),
  gender: z
    .string()
    .nullable()
    .refine((val) => val !== null, '성별을 선택해주세요.'),
});

export type ClubMemberAddData = z.infer<typeof clubMemberAddSchema>;
