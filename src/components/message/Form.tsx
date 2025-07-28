import * as S from './form.css';
import Button from '@/common/ui/button';

export default function Form() {
  return (
    <form className={S.container}>
      <div className={S.messageContainer}>
        <div className={S.sectionTitle}>합격 예정자 결과 내용</div>
        <div className={S.mainContainer}>
          <input placeholder="제목" className={S.input} />
          <div className={S.divider} />
          <textarea
            placeholder="결과 통지용으로 보낼 메시지 내용을 작성해주세요"
            className={S.textarea}
          />
        </div>
      </div>
      <div className={S.messageContainer}>
        <div className={S.sectionTitle}>불합격 예정자 결과 내용</div>
        <div className={S.mainContainer}>
          <input placeholder="제목" className={S.input} />
          <div className={S.divider} />
          <textarea
            placeholder="결과 통지용으로 보낼 메시지 내용을 작성해주세요"
            className={S.textarea}
          />
        </div>
      </div>
      <div className={S.submitContainer}>
        <Button variant="primary" className={S.button}>
          결과 전송하기
        </Button>
        <div className={S.note}>클릭 시, 각 지원자의 이메일로 송신됩니다.</div>
      </div>
    </form>
  );
}
