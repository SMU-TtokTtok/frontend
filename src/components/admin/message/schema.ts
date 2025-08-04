import { z } from 'zod';

export const messageSchema = z.object({
  passTitle: z.string().min(1, '합격 제목을 입력해주세요.'),
  passMessage: z.string().min(1, '합격 메시지를 입력해주세요.'),
  failTitle: z.string().min(1, '불합격 제목을 입력해주세요.'),
  failMessage: z.string().min(1, '불합격 메시지를 입력해주세요.'),
});

export type MessageForm = z.infer<typeof messageSchema>;
