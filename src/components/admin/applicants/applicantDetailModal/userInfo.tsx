import * as S from './applicantDetailModal.css';
import LabelWithText from './labelWithText';
import Checkbox from '@/common/ui/checkbox';
import check from '@/assets/check_radio.svg';
import AnswerFactory from './answerFactory/answerFactory';
import { ApplicantDetailInfo } from '@/common/model/applicants';

interface UserInfoProps {
  data: ApplicantDetailInfo;
}

function UserInfo({ data }: UserInfoProps) {
  return (
    <>
      {data && (
        <div className={S.userInfo}>
          <div className={S.basicInfo}>
            <div className={S.rowSort}>
              <LabelWithText label={'이름'} text={data.name} />
              <LabelWithText label={'나이'} text={data.age} />
              <LabelWithText label={'학과'} text={data.major} />
            </div>
            <div className={S.rowSort}>
              <LabelWithText label={'메일'} text={data.email} />
              <LabelWithText label={'번호'} text={data.phone} />
            </div>
            <div className={S.columnSort}>
              <label className={S.applicantInfoLabel}>
                재학여부<span className={S.essential}>*</span>
              </label>
              <div className={S.rawsort}>
                <Checkbox
                  variant="primary"
                  className={S.applicantInfoRadio}
                  label="재학 중"
                  defaultChecked={data.studentStatus === 'ENROLLED'}
                  img={check}
                  imgSize={S.imgStyle}
                  disabled
                />
                <Checkbox
                  variant="primary"
                  className={S.applicantInfoRadio}
                  label="휴학 중"
                  defaultChecked={data.studentStatus === 'ABSENCE'}
                  img={check}
                  imgSize={S.imgStyle}
                  disabled
                />
              </div>
            </div>
            <div className={S.columnSort}>
              <label className={S.applicantInfoLabel}>
                현재학년 <span className={S.essential}>*</span>
              </label>
              <div className={S.rawsort}>
                <Checkbox
                  variant="primary"
                  className={S.applicantInfoRadio}
                  defaultChecked={data.grade === 'FIRST_GRADE'}
                  img={check}
                  imgSize={S.imgStyle}
                  label="1학년"
                  disabled
                />
                <Checkbox
                  variant="primary"
                  className={S.applicantInfoRadio}
                  defaultChecked={data.grade === 'SECOND_GRADE'}
                  img={check}
                  imgSize={S.imgStyle}
                  label="2학년"
                  disabled
                />
                <Checkbox
                  variant="primary"
                  className={S.applicantInfoRadio}
                  defaultChecked={data.grade === 'THIRD_GRADE'}
                  img={check}
                  imgSize={S.imgStyle}
                  label="3학년"
                  disabled
                />
                <Checkbox
                  variant="primary"
                  className={S.applicantInfoRadio}
                  defaultChecked={data.grade === 'FOURTH_GRADE'}
                  img={check}
                  imgSize={S.imgStyle}
                  label="4학년"
                  disabled
                />
              </div>
            </div>
            <div className={S.columnSort}>
              <label className={S.applicantInfoLabel}>
                성별<span className={S.essential}>*</span>
              </label>
              <div className={S.rawsort}>
                <Checkbox
                  variant="primary"
                  className={S.applicantInfoRadio}
                  defaultChecked={data.gender === 'MALE'}
                  img={check}
                  imgSize={S.imgStyle}
                  label="남성"
                  disabled
                />
                <Checkbox
                  variant="primary"
                  className={S.applicantInfoRadio}
                  defaultChecked={data.gender === 'FEMAIL'}
                  img={check}
                  imgSize={S.imgStyle}
                  label="여성"
                  disabled
                />
              </div>
            </div>
          </div>

          {data.answers.map((answer, index) => (
            <AnswerFactory key={index} answer={answer} />
          ))}
        </div>
      )}
    </>
  );
}

export default UserInfo;
