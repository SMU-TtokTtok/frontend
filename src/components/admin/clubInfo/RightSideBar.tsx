import * as S from './RightSideBar.css';
import Button from '@/common/ui/button/index';
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

  return (
    <div className={S.container}>
      <div className={S.contentBox}>
        <div className={S.flexRow}>
          <div className={S.grayText}>모집기간</div>

          {isEditing ? (
            <div className={S.dateFlex}>
              <input
                type="date"
                value={recruitStartDate}
                onChange={(e) => {
                  onChange({ recruitStartDate: e.target.value });
                }}
              />
              <span>~</span>
              <input
                type="date"
                value={recruitEndDate}
                onChange={(e) => {
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
                  variant={recruitTarget.includes(grade) ? 'secondary' : 'tertiary'}
                  className={S.button}
                  onClick={() => {
                    let newTarget: number[];
                    if (recruitTarget.includes(grade)) {
                      newTarget = recruitTarget.filter((g) => g !== grade);
                    } else {
                      newTarget = [...recruitTarget, grade].sort();
                    }
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
              value={recruitNumber}
              type="number"
              className={S.numberInput}
              onChange={(e) => {
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
        >
          돌아가기
        </Button>
      )}
    </div>
  );
}
