import * as S from './RightSideBar.css';
import Button from '@/common/ui/button/index';
import { useState } from 'react';
import { AdminClubIntro } from '@/common/model/clubIntro';
import { convertGradeArrayToString } from '@/common/util/convertGradeArrayToString';

interface RightSideBarProps extends AdminClubIntro {
  onEditClick: () => void;
  isEditing: boolean;
  handleSave: () => void;
  onCancel: () => void;
  onChange: (fields: Partial<AdminClubIntro>) => void;
  // refetch: () => void;
}

export default function RightSideBar(props: RightSideBarProps) {
  const {
    onEditClick,
    isEditing,
    handleSave,
    onCancel,
    recruitStartDate,
    recruitEndDate,
    recruitTarget,
    recruitNumber,
    onChange,
    // refetch,
  } = props;

  // local state로 관리
  const [localStart, setLocalStart] = useState(recruitStartDate);
  const [localEnd, setLocalEnd] = useState(recruitEndDate);
  const [localTarget, setLocalTarget] = useState(recruitTarget);
  const [localNumber, setLocalNumber] = useState(recruitNumber);

  return (
    <div className={S.container}>
      <div className={S.contentBox}>
        <div className={S.flexRow}>
          <div className={S.grayText}>모집기간</div>

          {isEditing ? (
            <div className={S.dateFlex}>
              <input
                type="date"
                value={localStart}
                onChange={(e) => {
                  setLocalStart(e.target.value);
                  onChange({ recruitStartDate: e.target.value });
                }}
              />
              <span>~</span>
              <input
                type="date"
                value={localEnd}
                onChange={(e) => {
                  setLocalEnd(e.target.value);
                  onChange({ recruitEndDate: e.target.value });
                }}
              />
            </div>
          ) : (
            <div className={S.blackText}>
              {recruitStartDate} ~ {recruitEndDate}
            </div>
          )}
        </div>
        <div className={S.flexRow}>
          <div className={S.grayText}>모집대상</div>

          {isEditing ? (
            <div className={S.buttonFlex}>
              {[1, 2, 3, 4].map((grade) => (
                <Button
                  key={grade}
                  variant={localTarget.includes(grade) ? 'secondary' : 'tertiary'}
                  className={S.button}
                  onClick={() => {
                    let newTarget: number[];
                    if (localTarget.includes(grade)) {
                      newTarget = localTarget.filter((g) => g !== grade);
                    } else {
                      newTarget = [...localTarget, grade].sort();
                    }
                    setLocalTarget(newTarget);
                    onChange({ recruitTarget: newTarget });
                  }}
                >
                  {grade}학년
                </Button>
              ))}
            </div>
          ) : (
            <div className={S.blackText}>{convertGradeArrayToString(recruitTarget)}</div>
          )}
        </div>
        <div className={S.flexRow}>
          <div className={S.grayText}>모집인원</div>
          {isEditing ? (
            <input
              value={localNumber}
              type="number"
              className={S.numberInput}
              onChange={(e) => {
                setLocalNumber(Number(e.target.value));
                onChange({ recruitNumber: Number(e.target.value) });
              }}
            />
          ) : (
            <div className={S.blackText}>총 {recruitNumber}명</div>
          )}
        </div>
      </div>
      <Button
        variant="primary"
        className={S.modifyButton}
        onClick={isEditing ? handleSave : onEditClick}
      >
        {isEditing ? '저장하기' : '수정하기'}
      </Button>
      {isEditing && (
        <Button
          variant="tertiary"
          className={S.modifyButton + ' ' + 'cancel'}
          onClick={onCancel}
          style={{ marginTop: 8 }}
          // onClick={refetch}
        >
          돌아가기
        </Button>
      )}
    </div>
  );
}
