import Image from 'next/image';
import * as S from './applicantList.css';
import menu from '@/assets/menu.svg';
import { ApplicantsInfo } from '@/common/model/applicants';
import Tag from '@/common/ui/tag';
import { getGradeStyle } from '@/common/util/getGradeStyle';
import DropDown from '@/common/components/dropdown';
import DropDownButton from '@/common/ui/dropdownButton';
import { dropDownButtonVariant } from '@/common/ui/dropdownButton/dropdownButton.css';
interface ApplicantProps {
  applicant: ApplicantsInfo;
  handleFavoriteStatus: ({ applicantId, status }: { applicantId: number; status: string }) => void;
}
const options = [
  { value: 'pass', label: '합격' },
  { value: 'fail', label: '불합격' },
  { value: 'evaluating', label: '평가중' },
];
function ApplicantItem({ applicant, handleFavoriteStatus }: ApplicantProps) {
  const getStatusVariant = (status: string): dropDownButtonVariant => {
    switch (status) {
      case '평가중':
        return 'default';
      case '합격':
        return 'tertiary';
      case '불합격':
        return 'error';
      default:
        return 'default';
    }
  };
  return (
    <li className={S.applicantItemWrapper}>
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
          >
            {applicant.status}
          </DropDownButton>
        }
      >
        {options.map((status) => (
          <li
            key={status.value}
            className={S.dropDownItem}
            onClick={() =>
              handleFavoriteStatus({ applicantId: applicant.id, status: status.value })
            }
          >
            {status.label}
          </li>
        ))}
      </DropDown>
    </li>
  );
}

export default ApplicantItem;
