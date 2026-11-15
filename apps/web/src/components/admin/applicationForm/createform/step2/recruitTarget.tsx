import Button from '@/common/ui/button';
import * as S from './step2.css';
import { useEffect, useState } from 'react';
import { loadFromSession, saveToSession } from '@/common/util/sessionStorageUtil';
import { RecruitData } from '.';
import { toggleGrade } from './recruitStepRules';
interface RecruitTargetProps {
  recruitData: RecruitData;
  handleRecruitData: (key: keyof RecruitData, value: number[] | null) => void;
}

const gradeList = [1, 2, 3, 4];

function RecruitTarget({ handleRecruitData }: RecruitTargetProps) {
  // 3단계에서 돌아오면 세션의 학년을 다시 보여줘야 화면과 검증이 같은 값을 본다
  const [selectedGrades, setSelectedGrades] = useState<number[]>(
    () => loadFromSession<number[]>('applicableGrades') ?? [],
  );

  // 검증이 렌더링 중 세션을 읽으므로, 다음 값을 세션에 먼저 쓰고 부모에 넘긴다
  const handleGradeWithSession = (grade: number) => {
    const next = toggleGrade(selectedGrades, grade);
    setSelectedGrades(next);
    saveToSession('applicableGrades', next);
    handleRecruitData('applicableGrades', next);
  };

  useEffect(() => {
    saveToSession('applicableGrades', selectedGrades);
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
