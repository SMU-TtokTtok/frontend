import * as S from './login.css';
import Button from '@/common/ui/button/index';

export default function Page() {
  return (
    <div className={S.Container}>
      <div className={S.LoginText}>로그인</div>
      <form className={S.BoxContainer}>
        <div className={S.AuthText}>이메일</div>
        <input type='email' name='email' required className={S.Input} />
        <div className={S.AuthText} style={{ marginTop: '32px' }}>
          비밀번호
        </div>
        <input type='password' name='password' required className={S.Input} />

        <div className={S.AuthFooter}>
          <div className={S.AuthFooterTextContainer}>
            <div className={S.AuthFooterText}>비밀번호 재설정</div>
            <div className={S.AuthFooterText}>|</div>
            <div className={S.AuthFooterText}>회원가입</div>
          </div>
        </div>

        <Button variant='secondary' className={S.Button}>
          로그인
        </Button>
      </form>
    </div>
  );
}
