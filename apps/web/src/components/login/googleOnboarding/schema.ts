import { z } from 'zod';

export const googleOnboardingSchema = z.object({
  name: z
    .string()
    .min(2, '이름은 2자 이상이어야 합니다.')
    .max(10, '이름은 10자 이하여야 합니다.'),
  agree: z.literal(true, {
    errorMap: () => ({ message: '약관에 동의하셔야 합니다.' }),
  }),
});

export type GoogleOnboardingForm = z.infer<typeof googleOnboardingSchema>;
