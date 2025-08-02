import Image from 'next/image';
import * as S from './applicantList.css';
import menu from '@/assets/menu.svg';
import passArrow from '@/assets/arrow_pass.svg';
import failArrow from '@/assets/arrow_fail.svg';
import { Applicant } from '@/common/model/applicants';
import Tag from '@/common/ui/tag';
import { getGradeStyle } from '@/common/util/getGradeStyle';
import DropDown from '@/common/components/dropdown';
import DropDownButton from '@/common/ui/dropdownButton';
import { dropDownButtonVariant } from '@/common/ui/dropdownButton/dropdownButton.css';
import { convertToKor } from '@/common/util/convertToKor';
import { getKoreanGrade } from '@/common/util/getKoreanGrade';
import { ApplicantListParams, Evaluation } from '../api/applicants';
interface ApplicantProps {
  applicant: Applicant;
  selectedOptions: ApplicantListParams;
  handleFavoriteStatus: ({
    applicantId,
    status,
    evaluation,
  }: {
    applicantId: string;
    status: string;
    evaluation: Evaluation;
  }) => void;
  handleSelectApplicant: (applicantId: string) => void;
}
const options = [
  { value: 'PASS', label: '합격' },
  { value: 'FAIL', label: '불합격' },
  { value: 'EVALUATING', label: '평가중' },
];
function ApplicantItem({
  applicant,
  handleFavoriteStatus,
  handleSelectApplicant,
  selectedOptions,
}: ApplicantProps) {
  const getStatusVariant = (status: string): dropDownButtonVariant => {
    switch (status) {
      case 'EVALUATING':
        return 'default';
      case 'PASS':
        return 'tertiary';
      case 'FAIL':
        return 'error';
      default:
        return 'default';
    }
  };

  const imgSrc =
    applicant.status === 'PASS' ? passArrow : applicant.status === 'FAIL' ? failArrow : undefined;

  return (
    <li className={S.applicantItemWrapper} onClick={() => handleSelectApplicant(applicant.id)}>
      <div className={S.profileSection}>
        <Image src={menu} alt="menu" />
        <Tag variant={getGradeStyle(applicant.grade)} className={S.applicantGrade}>
          {getKoreanGrade(applicant.grade)}
        </Tag>
        <span className={S.applicantName}>{applicant.name}</span>
        <span className={S.verticalLine} />
        <span className={S.applicantDepartment}>{applicant.major}</span>
      </div>
      <DropDown
        toggleButton={
          <DropDownButton
            variant={getStatusVariant(applicant.status)}
            className={S.dropDownButtonStyle}
            img={imgSrc}
          >
            {convertToKor(applicant.status)}
          </DropDownButton>
        }
      >
        {options.map((status) => (
          <li
            key={status.value}
            className={S.dropDownItem}
            onClick={(e) => {
              e.stopPropagation();
              handleFavoriteStatus({
                applicantId: applicant.id,
                status: status.value,
                evaluation: selectedOptions.evaluation,
              });
            }}
          >
            {status.label}
          </li>
        ))}
      </DropDown>
    </li>
  );
}

export default ApplicantItem;
