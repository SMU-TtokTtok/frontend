import { z } from 'zod';

/** 내용은 리치 텍스트라 별도로 검증한다(빈 에디터는 <p></p>가 남음) */
export const clubBoardSchema = z.object({
  title: z.string().trim().min(1, '제목을 입력해주세요.'),
});

export type ClubBoardForm = z.infer<typeof clubBoardSchema>;
