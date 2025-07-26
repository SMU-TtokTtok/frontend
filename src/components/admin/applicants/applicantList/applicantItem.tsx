import Image from 'next/image';
import * as S from './applicantList.css';
import menu from '@/assets/menu.svg';
import passArrow from '@/assets/arrow_pass.svg';
import failArrow from '@/assets/arrow_fail.svg';
import { ApplicantsInfo } from '@/common/model/applicants';
import Tag from '@/common/ui/tag';
import { getGradeStyle } from '@/common/util/getGradeStyle';
import DropDown from '@/common/components/dropdown';
import DropDownButton from '@/common/ui/dropdownButton';
import { dropDownButtonVariant } from '@/common/ui/dropdownButton/dropdownButton.css';
import { convertToKor } from '@/common/util/convertToKor';
interface ApplicantProps {
  applicant: ApplicantsInfo;
  handleFavoriteStatus: ({ applicantId, status }: { applicantId: number; status: string }) => void;
  handleSelectApplicant: (applicantId: number) => void;
}
const options = [
  { value: 'PASS', label: '합격' },
  { value: 'FAIL', label: '불합격' },
  { value: 'EVALUATING', label: '평가중' },
];
function ApplicantItem({ applicant, handleFavoriteStatus, handleSelectApplicant }: ApplicantProps) {
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
          {applicant.grade}학년
        </Tag>
        <span className={S.applicantName}>{applicant.name}</span>
        <span className={S.verticalLine} />
        <span className={S.applicantDepartment}>{applicant.department}</span>
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
              handleFavoriteStatus({ applicantId: applicant.id, status: status.value });
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
