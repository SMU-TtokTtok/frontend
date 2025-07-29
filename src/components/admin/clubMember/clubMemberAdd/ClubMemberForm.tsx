import React from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import * as S from '@/components/apply/form.css';
import { ClubMemberAddData } from './schema';

interface ClubMemberFormProps {
  register: UseFormRegister<ClubMemberAddData>;
  errors: FieldErrors<ClubMemberAddData>;
}

export default function ClubMemberForm({ register, errors }: ClubMemberFormProps) {
  return (
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
            학번<span className={S.FormContentTitleEssential}>*</span>
          </div>
          <input
            size={1}
            type="text"
            className={S.FormInput}
            placeholder="학번을 입력해주세요."
            {...register('studentId')}
          />
          {errors.studentId && (
            <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
              {errors.studentId.message}
            </div>
          )}
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
      </div>

      <div className={S.FormContentFlex}>
        <div className={S.FormContentContainer}>
          <div className={S.FormContentTitle}>
            이메일<span className={S.FormContentTitleEssential}>*</span>
          </div>
          <input
            size={1}
            type="text"
            className={S.FormInput}
            placeholder="example@gmail.com"
            {...register('email')}
          />
          {errors.email && (
            <div style={{ color: 'red', fontSize: '12px', marginTop: '4px' }}>
              {errors.email.message}
            </div>
          )}
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
      </div>

      <div className={S.FormContentContainer}>
        <div className={S.FormContentTitle}>
          현재 학년<span className={S.FormContentTitleEssential}>*</span>
        </div>
        <div className={S.FormContentRadioContainer}>
          <label className={S.LabelContainer}>
            <input type="radio" value="1" {...register('grade')} className={S.radioInput} />
            <span className={S.RadioText}>1학년</span>
          </label>
          <label className={S.LabelContainer}>
            <input type="radio" value="2" {...register('grade')} className={S.radioInput} />
            <span className={S.RadioText}>2학년</span>
          </label>
          <label className={S.LabelContainer}>
            <input type="radio" value="3" {...register('grade')} className={S.radioInput} />
            <span className={S.RadioText}>3학년</span>
          </label>
          <label className={S.LabelContainer}>
            <input type="radio" value="4" {...register('grade')} className={S.radioInput} />
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
