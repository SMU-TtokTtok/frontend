import Button from '@/common/ui/button';
import * as S from './step2.css';
import { useEffect, useState } from 'react';
import { saveToSession } from '@/common/util/sessionStorageUtil';
import { RecruitData } from '.';
interface RecruitTargetProps {
  recruitData: RecruitData;
  handleRecruitData: (key: keyof RecruitData, value: number[] | null) => void;
}

const gradeList = [1, 2, 3, 4];

function RecruitTarget({ handleRecruitData }: RecruitTargetProps) {
  const [selectedGrades, setSelectedGrades] = useState<number[]>([]);

  const handleGradeWithSession = (grade: number) => {
    setSelectedGrades((prev) =>
      prev.includes(grade) ? prev.filter((g) => g !== grade) : [...prev, grade],
    );
    handleRecruitData('selectedGrades', selectedGrades);
  };

  useEffect(() => {
    saveToSession('selectedGrades', selectedGrades);
  }, [selectedGrades]);

  const isSelected = (grade: number) => selectedGrades.includes(grade);

  return (
    <div className={S.container}>
      <p className={S.label}>
        모집대상<span className={S.required}>*</span>
      </p>

      <div className={S.recruitTargetContainer}>
        {gradeList.map((grade) => (
          <Button
            key={grade}
            variant="none"
            className={`${S.gradeButton({ active: isSelected(grade) })}`}
            onClick={() => handleGradeWithSession(grade)}
          >
            {grade}학년
          </Button>
        ))}
      </div>
    </div>
  );
}

export default RecruitTarget;
