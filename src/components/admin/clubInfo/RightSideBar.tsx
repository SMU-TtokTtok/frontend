import * as S from './RightSideBar.css';
import Button from '@/common/ui/button/index';
import { AdminClubIntro } from '@/common/model/clubIntro';
import { convertGradeArrayToString } from '@/common/util/convertGradeArrayToString';
import { formatDateToDot, formatDateToMonthDay } from '@/common/util/formatDate';
import { assignInlineVars } from '@vanilla-extract/dynamic';
import { useFollowSidebar } from '@/hooks/useFollowSidebar';
import { getKoreanGrade } from '@/common/util/getKoreanGrade';

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
    applyStartDate,
    applyDeadLine,
    grades,
    maxApplyCount,
    onChange,
    // refetch,
  } = props;
  const { barPosition } = useFollowSidebar({ initialPosition: 176 });

  return (
    <div
      className={S.container}
      style={assignInlineVars({
        [S.sidebarTop]: `${barPosition}px`,
      })}
    >
      <div className={S.contentBox}>
        <div className={S.flexRow}>
          <div className={S.grayText}>모집기간</div>

          {isEditing ? (
            <div className={S.dateFlex}>
              <input
                type="date"
                value={applyStartDate || ''}
                onChange={(e) => {
                  onChange({ applyStartDate: e.target.value });
                }}
                className={S.dateInput}
              />
              <span>~</span>
              <input
                type="date"
                value={applyDeadLine || ''}
                onChange={(e) => {
                  onChange({ applyDeadLine: e.target.value });
                }}
                className={S.dateInput}
              />
            </div>
          ) : (
            <div className={S.blackText}>
              {formatDateToDot(applyStartDate)}~{formatDateToMonthDay(applyDeadLine)}
            </div>
          )}
        </div>
        <div className={S.flexRow}>
          <div className={S.grayText}>모집대상</div>

          {isEditing ? (
            <div className={S.buttonFlex}>
              {['FIRST_GRADE', 'SECOND_GRADE', 'THIRD_GRADE', 'FOURTH_GRADE'].map((grade) => (
                <Button
                  key={grade}
                  variant={grades.includes(grade) ? 'secondary' : 'tertiary'}
                  className={S.button}
                  onClick={() => {
                    let newTarget: string[];
                    if (grades.includes(grade)) {
                      newTarget = grades.filter((g) => g !== grade);
                    } else {
                      newTarget = [...grades, grade].sort();
                    }
                    onChange({ grades: newTarget });
                  }}
                >
                  {getKoreanGrade(grade)}
                </Button>
              ))}
            </div>
          ) : (
            <div className={S.blackText}>{convertGradeArrayToString(grades)}</div>
          )}
        </div>
        <div className={S.flexRow}>
          <div className={S.grayText}>모집인원</div>
          {isEditing ? (
            <input
              value={maxApplyCount}
              type="number"
              className={S.numberInput}
              onChange={(e) => {
                onChange({ maxApplyCount: Number(e.target.value) });
              }}
            />
          ) : (
            <div className={S.blackText}>총 {maxApplyCount}명</div>
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
        >
          돌아가기
        </Button>
      )}
    </div>
  );
}
