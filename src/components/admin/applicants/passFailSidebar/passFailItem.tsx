import Image from 'next/image';
import * as S from './passFailSidebar.css';
import { ApplicantsInfo } from '@/common/model/applicants';
import Tag from '@/common/ui/tag';
import { getGradeStyle } from '@/common/util/getGradeStyle';
import DropDown from '@/common/components/dropdown';
import moreVert from '@/assets/more_vert.svg';
interface ApplicantProps {
  applicant: ApplicantsInfo;
  handleFavoriteStatus: ({ applicantId, status }: { applicantId: number; status: string }) => void;
}
const options = [
  { value: 'pass', label: '합격' },
  { value: 'fail', label: '불합격' },
  { value: 'evaluating', label: '평가중' },
];
function PassFailItem({ applicant, handleFavoriteStatus }: ApplicantProps) {
  return (
    <li className={S.ItemWrapper}>
      <div className={S.profileSection}>
        <Tag variant={getGradeStyle(applicant.grade)} className={S.grade}>
          {applicant.grade}학년
        </Tag>
        <span className={S.name}>{applicant.name}</span>
        <span className={S.verticalLine} />
        <span className={S.department}>{applicant.department}</span>
      </div>
      <DropDown toggleButton={<Image src={moreVert} alt="more options" />}>
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

export default PassFailItem;
