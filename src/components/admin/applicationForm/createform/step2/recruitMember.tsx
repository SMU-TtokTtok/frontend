import Input from '@/common/ui/input';
import * as S from './step2.css';
import { saveToSession } from '@/common/util/sessionStorageUtil';
import { RecruitData } from '.';
interface RecruitMemberProps {
  handleRecruitData: (key: keyof RecruitData, value: number | null) => void;
}

function RecruitMember({ handleRecruitData }: RecruitMemberProps) {
  const handleSessionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const value = e.target.value;
    saveToSession('maxApplyCount', parseInt(value));
    handleRecruitData('maxApplyCount', parseInt(value));
  };

  return (
    <div className={S.container}>
      <p className={S.label}>
        모집인원<span className={S.required}>*</span>
      </p>
      <Input
        type="number"
        className={S.recruitMember}
        placeholder="숫자를 입력해주세요"
        onChange={handleSessionChange}
      />
    </div>
  );
}

export default RecruitMember;
