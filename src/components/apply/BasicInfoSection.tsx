import { UseFormRegister, FieldErrors } from 'react-hook-form';
import * as S from './form.css';
import { ApplyFormData } from './schema';

interface BasicInfoSectionProps {
  register: UseFormRegister<ApplyFormData>;
  errors: FieldErrors<ApplyFormData>;
}

export default function BasicInfoSection({ register, errors }: BasicInfoSectionProps) {
  return (
    <div id="basic-info" className={S.FormBasicContainer}>
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
            {...register('name')}
          />
          {errors.name && (
            <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
              {errors.name.message}
            </div>
          )}
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
            {...register('age')}
          />
          {errors.age && (
            <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
              {errors.age.message}
            </div>
          )}
        </div>
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
          {...register('major')}
        />
        {errors.major && (
          <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
            {errors.major.message}
          </div>
        )}
      </div>
      <div className={S.FormContentFlex}>
        <div className={S.FormContentContainer}>
          <div className={S.FormContentTitle}>
            이메일<span className={S.FormContentTitleEssential}>*</span>
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <input
              size={1}
              type="text"
              className={S.FormInput}
              placeholder="example"
              style={{ flex: 1 }}
              {...register('emailPrefix')}
            />
            <span style={{ alignSelf: 'center', color: '#666' }}>@</span>
            <select
              className={S.FormInput}
              style={{ minWidth: '120px' }}
              {...register('emailDomain')}
            >
              <option value="gmail.com">gmail.com</option>
              <option value="naver.com">naver.com</option>
              <option value="nate.com">nate.com</option>
              <option value="daum.net">daum.net</option>
              <option value="kakao.com">kakao.com</option>
              <option value="hanmail.net">hanmail.net</option>
            </select>
          </div>
          {(errors.emailPrefix || errors.emailDomain) && (
            <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
              {errors.emailPrefix?.message || errors.emailDomain?.message}
            </div>
          )}
        </div>
      </div>
      <div className={S.FormContentContainer}>
        <div className={S.FormContentTitle}>
          전화번호<span className={S.FormContentTitleEssential}>*</span>
        </div>
        <input
          size={1}
          type="text"
          className={S.FormInput}
          placeholder="010-0000-0000"
          {...register('phone')}
        />
        {errors.phone && (
          <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
            {errors.phone.message}
          </div>
        )}
      </div>
      <div className={S.FormContentContainer}>
        <div className={S.FormContentTitle}>
          재학여부<span className={S.FormContentTitleEssential}>*</span>
        </div>
        <div className={S.FormContentRadioContainer}>
          <label className={S.LabelContainer}>
            <input
              type="radio"
              value="ENROLLED"
              {...register('studentStatus')}
              className={S.radioInput}
            />
            <span className={S.RadioText}>재학</span>
          </label>
          <label className={S.LabelContainer}>
            <input
              type="radio"
              value="ABSENCE"
              {...register('studentStatus')}
              className={S.radioInput}
            />
            <span className={S.RadioText}>졸업</span>
          </label>
        </div>
        {errors.studentStatus && (
          <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
            {errors.studentStatus.message}
          </div>
        )}
      </div>

      <div className={S.FormContentContainer}>
        <div className={S.FormContentTitle}>
          현재 학년<span className={S.FormContentTitleEssential}>*</span>
        </div>
        <div className={S.FormContentRadioContainer}>
          <label className={S.LabelContainer}>
            <input
              type="radio"
              value="FIRST_GRADE"
              {...register('grade')}
              className={S.radioInput}
            />
            <span className={S.RadioText}>1학년</span>
          </label>
          <label className={S.LabelContainer}>
            <input
              type="radio"
              value="SECOND_GRADE"
              {...register('grade')}
              className={S.radioInput}
            />
            <span className={S.RadioText}>2학년</span>
          </label>
          <label className={S.LabelContainer}>
            <input
              type="radio"
              value="THIRD_GRADE"
              {...register('grade')}
              className={S.radioInput}
            />
            <span className={S.RadioText}>3학년</span>
          </label>
          <label className={S.LabelContainer}>
            <input
              type="radio"
              value="FOURTH_GRADE"
              {...register('grade')}
              className={S.radioInput}
            />
            <span className={S.RadioText}>4학년</span>
          </label>
        </div>
        {errors.grade && (
          <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
            {errors.grade.message}
          </div>
        )}
      </div>

      <div className={S.FormContentContainer}>
        <div className={S.FormContentTitle}>
          성별<span className={S.FormContentTitleEssential}>*</span>
        </div>
        <div className={S.FormContentRadioContainer}>
          <label className={S.LabelContainer}>
            <input type="radio" value="MALE" {...register('gender')} className={S.radioInput} />
            <span className={S.RadioText}>남성</span>
          </label>
          <label className={S.LabelContainer}>
            <input type="radio" value="FEMALE" {...register('gender')} className={S.radioInput} />
            <span className={S.RadioText}>여성</span>
          </label>
        </div>
        {errors.gender && (
          <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
            {errors.gender.message}
          </div>
        )}
      </div>
    </div>
  );
}
