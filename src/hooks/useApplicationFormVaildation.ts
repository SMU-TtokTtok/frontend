import { QuestionStepForm } from '@/common/model/applicationForm';
import { z } from 'zod';
export enum QuestionType {
  LONG_ANSWER = 'LONG_ANSWER',
  SHORT_ANSWER = 'SHORT_ANSWER',
  CHECKBOX = 'CHECKBOX',
  RADIO = 'RADIO',
  FILE = 'FILE',
}

const ApplyFormFieldSchema = z
  .object({
    title: z.string().min(1, '질문 제목은 필수입니다.'),
    questionType: z.nativeEnum(QuestionType),
    isEssential: z.boolean(),
    content: z.array(z.string()).optional(),
  })
  .superRefine((field, ctx) => {
    if (['CHECKBOX', 'RADIO'].includes(field.questionType)) {
      if (!field.content || field.content.length === 0) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: '선택지는 하나 이상 있어야 해요.',
          path: ['content'],
        });
      } else {
        field.content.forEach((value, index) => {
          if (value.trim() === '') {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              message: '빈 선택지는 사용할 수 없어요.',
              path: ['content', index],
            });
          }
        });
      }
    }
  });

const ApplicationFormSchema = z.object({
  title: z.string().min(1, '폼 제목은 필수입니다.'),
  questions: z.array(ApplyFormFieldSchema),
});

export const useApplicationFormValidation = (formData: QuestionStepForm) => {
  const validate = () => {
    const result = ApplicationFormSchema.safeParse(formData);

    return result;
  };

  const result = validate();
  const errors = result.error?.format();
  return { result, errors };
};
