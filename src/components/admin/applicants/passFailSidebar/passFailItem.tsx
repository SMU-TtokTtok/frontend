import Image from 'next/image';
import * as S from './passFailSidebar.css';
import { Applicant } from '@/common/model/applicants';
import Tag from '@/common/ui/tag';
import { getGradeStyle } from '@/common/util/getGradeStyle';
import DropDown from '@/common/components/dropdown';
import moreVert from '@/assets/more_vert.svg';
import { getKoreanGrade } from '@/common/util/getKoreanGrade';
import { ApplicantListParams, Evaluation } from '../api/applicants';
interface ApplicantProps {
  disableCursor?: boolean;
  applicant: Applicant;
  selectedOptions?: ApplicantListParams;
  handleApplicantStatus?: ({
    applicantId,
    status,
    evaluation,
  }: {
    applicantId: string;
    status: string;
    evaluation: Evaluation;
  }) => void;
}

const options = [
  { value: 'PASS', label: '합격' },
  { value: 'FAIL', label: '불합격' },
  { value: 'EVALUATING', label: '평가중' },
];

function PassFailItem({
  applicant,
  handleApplicantStatus,
  disableCursor,
  selectedOptions,
}: ApplicantProps) {
  const isHandleApplicantStatus = !!handleApplicantStatus;
  const wrapper = `${S.ItemWrapper} ${disableCursor ? 'disableCursor' : ''}`;
  return (
    <li className={wrapper}>
      <div className={S.profileSection}>
        <Tag variant={getGradeStyle(applicant.grade)} className={S.grade}>
          {getKoreanGrade(applicant.grade)}
        </Tag>
        <span className={S.name}>{applicant.name}</span>
        <span className={S.verticalLine} />
        <span className={S.department}>{applicant.major}</span>
      </div>
      {isHandleApplicantStatus && (
        <DropDown toggleButton={<Image src={moreVert} alt="more options" />}>
          {options.map((status) => (
            <li
              key={status.value}
              className={S.dropDownItem}
              onClick={() =>
                handleApplicantStatus({
                  applicantId: applicant.id,
                  status: status.value,
                  evaluation: selectedOptions!.evaluation,
                })
              }
            >
              {status.label}
            </li>
          ))}
        </DropDown>
      )}
    </li>
  );
}

export default PassFailItem;
