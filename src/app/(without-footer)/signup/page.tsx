import * as S from './signup.css';
import Button from '@/common/ui/button';
import { POLICY } from '@/common/constants/policy';

export default function page() {
  return (
    <div className={S.Container}>
      <div className={S.BoxContainer}>
        <div className={S.TitleText}>회원가입</div>

        <div className={S.LabelBoxContainer} style={{ gap: '112px' }}>
          <div className={S.LabelText}>이메일 인증</div>
          <div className={S.LabelDetailBox}>
            <div className={S.FlexBox}>
              <div className={S.LabelDetailText}>이메일</div>
              <div className={S.FlexBox2}>
                <input className={S.Input} />
                <Button variant='secondary' className={S.Button}>
                  인증코드 전송
                </Button>
              </div>
            </div>
            <div className={S.FlexBox}>
              <div className={S.LabelDetailText}>인증코드</div>
              <div className={S.FlexBox2}>
                <input className={S.Input} />
              </div>
            </div>
          </div>
        </div>

        <div className={S.LabelBoxContainer} style={{ gap: '134px' }}>
          <div className={S.LabelText}>비밀번호</div>
          <div className={S.LabelDetailBox}>
            <div className={S.FlexBox}>
              <div className={S.LabelDetailText}>비밀번호</div>
              <div className={S.FlexBox2}>
                <input className={S.Input} />
              </div>
            </div>
            <div className={S.FlexBox}>
              <div className={S.LabelDetailText}>비밀번호 재입력</div>
              <div className={S.FlexBox2}>
                <input className={S.Input} />
              </div>
            </div>
          </div>
        </div>

        <div className={S.LabelBoxContainer} style={{ gap: '166px' }}>
          <div className={S.LabelText}>이름</div>
          <input className={S.Input} placeholder='본인의 이름을 기재해주세요' />
        </div>

        <div className={S.LabelBoxContainer} style={{ gap: '112px' }}>
          <div className={S.LabelText}>약관 동의란</div>
          <div className={S.FlexPolicy}>
            <div className={S.PolicyBox}>{POLICY}</div>
            <div className={S.FlexAgree}>
              <input type='checkbox' />
              <div className={S.AgreeText}>약관 동의란에 대해 동의합니다.</div>
            </div>
          </div>
        </div>

        <Button variant='primary' className={S.SignupButton}>
          가입하기
        </Button>
      </div>
    </div>
  );
}
