import * as S from '@/components/apply/form.css';

export default function Form() {
  return (
    <div className={S.container}>
      <div className={S.FormHeader}>
        <div className={S.FormTitle}>제목</div>
        <div className={S.FormSubTitle}>부제목</div>
      </div>

      <div className={S.FormBasicContainer}>
        <div className={S.FormContentFlex}>
          <div className={S.FormContentContainer}>
            <div className={S.FormContentTitle}>
              이름<span className={S.FormContentTitleEssential}>*</span>
            </div>
            <input
              size={1}
              type="text"
              className={S.FormInput}
              placeholder="이름을 입력해주세요."
            />
          </div>
          <div className={S.FormContentContainer}>
            <div className={S.FormContentTitle}>
              나이<span className={S.FormContentTitleEssential}>*</span>
            </div>
            <input
              size={1}
              type="text"
              className={S.FormInput}
              placeholder="나이를 입력해주세요."
            />
          </div>
          <div className={S.FormContentContainer}>
            <div className={S.FormContentTitle}>
              학과<span className={S.FormContentTitleEssential}>*</span>
            </div>
            <input
              size={1}
              type="text"
              className={S.FormInput}
              placeholder="학과를 입력해주세요."
            />
          </div>
        </div>

        <div className={S.FormContentFlex}>
          <div className={S.FormContentContainer}>
            <div className={S.FormContentTitle}>
              이메일<span className={S.FormContentTitleEssential}>*</span>
            </div>
            <input size={1} type="text" className={S.FormInput} placeholder="example@gmail.com" />
          </div>
          <div className={S.FormContentContainer}>
            <div className={S.FormContentTitle}>
              전화번호<span className={S.FormContentTitleEssential}>*</span>
            </div>
            <input size={1} type="text" className={S.FormInput} placeholder="010-0000-0000" />
          </div>
        </div>

        <div className={S.FormContentContainer}>
          <div className={S.FormContentTitle}>
            재학여부<span className={S.FormContentTitleEssential}>*</span>
          </div>
          <div className={S.FormContentRadioContainer}>
            <label className={S.LabelContainer}>
              <input type="radio" name="isStudent" value="true" />
              <span className={S.RadioText}>재학</span>
            </label>
            <label className={S.LabelContainer}>
              <input type="radio" name="isStudent" value="false" />
              <span className={S.RadioText}>졸업</span>
            </label>
          </div>
        </div>

        <div className={S.FormContentContainer}>
          <div className={S.FormContentTitle}>
            현재 학년<span className={S.FormContentTitleEssential}>*</span>
          </div>
          <div className={S.FormContentRadioContainer}>
            <label className={S.LabelContainer}>
              <input type="radio" name="grade" value="true" />
              <span className={S.RadioText}>1학년</span>
            </label>
            <label className={S.LabelContainer}>
              <input type="radio" name="grade" value="false" />
              <span className={S.RadioText}>2학년</span>
            </label>
            <label className={S.LabelContainer}>
              <input type="radio" name="grade" value="false" />
              <span className={S.RadioText}>3학년</span>
            </label>
            <label className={S.LabelContainer}>
              <input type="radio" name="grade" value="false" />
              <span className={S.RadioText}>4학년</span>
            </label>
          </div>
        </div>

        <div className={S.FormContentContainer}>
          <div className={S.FormContentTitle}>
            성별<span className={S.FormContentTitleEssential}>*</span>
          </div>
          <div className={S.FormContentRadioContainer}>
            <label className={S.LabelContainer}>
              <input type="radio" name="gender" value="true" />
              <span className={S.RadioText}>남성</span>
            </label>
            <label className={S.LabelContainer}>
              <input type="radio" name="gender" value="false" />
              <span className={S.RadioText}>여성</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
