import * as S from './form.css';
import Button from '@/common/ui/button';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { messageSchema, type MessageForm } from './schema';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm<MessageForm>({
    resolver: zodResolver(messageSchema),
    mode: 'onChange',
  });

  const watchedValues = watch();
  const isFormValid =
    isValid &&
    watchedValues.passTitle &&
    watchedValues.passMessage &&
    watchedValues.failTitle &&
    watchedValues.failMessage;

  const onSubmit = (data: MessageForm) => {
    console.log('폼 제출:', data);
    // 폼 제출 로직
  };

  return (
    <form className={S.container} onSubmit={handleSubmit(onSubmit)}>
      <div className={S.messageContainer}>
        <div className={S.sectionTitle}>합격 예정자 결과 내용</div>
        <div className={S.mainContainer}>
          <input placeholder="제목" className={S.input} {...register('passTitle')} />
          {errors.passTitle && <p className={S.errorText}>{errors.passTitle.message}</p>}
          <div className={S.divider} />
          <textarea
            placeholder="결과 통지용으로 보낼 메시지 내용을 작성해주세요"
            className={S.textarea}
            {...register('passMessage')}
          />
          {errors.passMessage && <p className={S.errorText}>{errors.passMessage.message}</p>}
        </div>
      </div>
      <div className={S.messageContainer}>
        <div className={S.sectionTitle}>불합격 예정자 결과 내용</div>
        <div className={S.mainContainer}>
          <input placeholder="제목" className={S.input} {...register('failTitle')} />
          {errors.failTitle && <p className={S.errorText}>{errors.failTitle.message}</p>}
          <div className={S.divider} />
          <textarea
            placeholder="결과 통지용으로 보낼 메시지 내용을 작성해주세요"
            className={S.textarea}
            {...register('failMessage')}
          />
          {errors.failMessage && <p className={S.errorText}>{errors.failMessage.message}</p>}
        </div>
      </div>
      <div className={S.submitContainer}>
        <Button variant="primary" className={S.button} disabled={!isFormValid} type="submit">
          결과 전송하기
        </Button>
        <div className={S.note}>클릭 시, 각 지원자의 이메일로 송신됩니다.</div>
      </div>
    </form>
  );
}
