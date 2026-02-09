import { z } from 'zod';

export const passwordSchema = z.object({
  username: z
    .string()
    .min(8, '아이디는 최소 8자 이상이어야 합니다.')
    .regex(/^[a-zA-Z0-9_-]+$/, '아이디는 영문, 숫자, -, _만 사용 가능합니다.')
    .refine((val) => !/[\u3131-\u3163\uac00-\ud7a3]/.test(val), {
      message: '아이디에 한글을 사용할 수 없습니다.',
    }),
  newPassword: z
    .string()
    .min(12, '비밀번호는 최소 12자 이상이어야 합니다.')
    .regex(
      /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/,
      '비밀번호는 영문, 숫자, 특수문자만 사용 가능합니다.',
    )
    .refine((val) => !/[\u3131-\u3163\uac00-\ud7a3]/.test(val), {
      message: '비밀번호에 한글을 사용할 수 없습니다.',
    }),
  newPasswordConfirm: z
    .string()
    .min(12, '비밀번호는 최소 12자 이상이어야 합니다.')
    .regex(
      /^[a-zA-Z0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/,
      '비밀번호는 영문, 숫자, 특수문자만 사용 가능합니다.',
    )
    .refine((val) => !/[\u3131-\u3163\uac00-\ud7a3]/.test(val), {
      message: '비밀번호에 한글을 사용할 수 없습니다.',
    }),
}).refine((data) => data.newPassword === data.newPasswordConfirm, {
  message: '비밀번호가 일치하지 않습니다.',
  path: ['newPasswordConfirm'],
});
