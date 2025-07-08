import * as S from '@/components/password/index.css';
import Button from '@/common/ui/button';
import Input from '@/common/ui/input';

export default function Page() {
  return (
    <div className={S.Wrapper}>
      <div className={S.Container}>
        <div className={S.Title}>비밀번호 재설정</div>
        <div className={S.BoxContainer({ gap: 'small' })}>
          <div className={S.BoxTitle}>이메일 인증</div>
          <div className={S.SubContainer}>
            <div className={S.SubDetailContainer}>
              <div className={S.BoxSubTitle}>이메일</div>
              <div className={S.InputButtonFlex}>
                <Input className={S.Input} placeholder="20XXXXXXX@sangmyung.kr" />
                <Button variant="secondary" className={S.Button}>
                  인증코드 전송
                </Button>
              </div>
            </div>
            <div className={S.SubDetailContainer}>
              <div className={S.BoxSubTitle}>인증코드</div>
              <div className={S.InputButtonFlex}>
                <Input className={S.Input} placeholder="000-0000-0000" />
                <Button variant="secondary" className={S.Button}>
                  인증코드 확인
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className={S.BoxContainer({ gap: 'large' })}>
          <div className={S.BoxTitle}>
            비밀번호
            <br />
            재설정
          </div>
          <div className={S.SubContainer}>
            <div className={S.SubDetailContainer}>
              <div className={S.BoxSubTitle}>비밀번호</div>
              <Input className={S.Input} placeholder="abcdefg." />
            </div>
            <div className={S.SubDetailContainer}>
              <div className={S.BoxSubTitle}>비밀번호 재입력</div>
              <Input className={S.Input} placeholder="abcdefg." />
            </div>
          </div>
        </div>

        <Button variant="primary" className={S.SubmitButton}>
          변경하기
        </Button>
      </div>
    </div>
  );
}
