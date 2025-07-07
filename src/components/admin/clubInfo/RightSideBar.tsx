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
  } = props;

  // local state로 관리
  const [localStart, setLocalStart] = useState(recruitStartDate);
  const [localEnd, setLocalEnd] = useState(recruitEndDate);
  const [localTarget, setLocalTarget] = useState(recruitTarget);
  const [localNumber, setLocalNumber] = useState(recruitNumber);

  // isEditing이 false가 되면 부모값으로 동기화
  // useEffect(() => {
  //   if (!isEditing) {
  //     setLocalStart(recruitStartDate);
  //     setLocalEnd(recruitEndDate);
  //     setLocalTarget(recruitTarget);
  //     setLocalNumber(recruitNumber);
  //   }
  // }, [isEditing, recruitStartDate, recruitEndDate, recruitTarget, recruitNumber]);

  return (
    <div className={S.container}>
      <div className={S.contentBox}>
        <div className={S.flexRow}>
          <div className={S.grayText}>모집기간</div>
          <div className={S.blackText}>
            {isEditing ? (
              <>
                <input
                  type="date"
                  value={localStart}
                  onChange={(e) => {
                    setLocalStart(e.target.value);
                    onChange({ recruitStartDate: e.target.value });
                  }}
                  style={{ marginRight: 8 }}
                />
                ~
                <input
                  type="date"
                  value={localEnd}
                  onChange={(e) => {
                    setLocalEnd(e.target.value);
                    onChange({ recruitEndDate: e.target.value });
                  }}
                  style={{ marginLeft: 8 }}
                />
              </>
            ) : (
              `${recruitStartDate} ~ ${recruitEndDate}`
            )}
          </div>
        </div>
        <div className={S.flexRow}>
          <div className={S.grayText}>모집대상</div>
          <div className={S.blackText}>
            {isEditing ? (
              <input
                type="number"
                value={localTarget}
                onChange={(e) => {
                  setLocalTarget(e.target.value);
                  onChange({ recruitTarget: e.target.value });
                }}
                className={S.numberInput}
              />
            ) : (
              convertGradeArrayToString(recruitTarget)
            )}
          </div>
        </div>
        <div className={S.flexRow}>
          <div className={S.grayText}>모집인원</div>
          <div className={S.blackText}>
            {isEditing ? (
              <input
                value={localNumber}
                type="number"
                onChange={(e) => {
                  setLocalNumber(e.target.value);
                  onChange({ recruitNumber: Number(e.target.value) });
                }}
              />
            ) : (
              `총 ${recruitNumber}명`
            )}
          </div>
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
          className={S.modifyButton}
          onClick={onCancel}
          style={{ marginTop: 8 }}
        >
          돌아가기
        </Button>
      )}
    </div>
  );
}
