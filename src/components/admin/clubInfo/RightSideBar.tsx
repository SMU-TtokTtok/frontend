import * as S from './RightSideBar.css';
import Button from '@/common/ui/button/index';

export default function RightSideBar({
  onEditClick,
  isEditing,
  handleSave,
  onCancel,
  recruitPeriod,
  recruitTarget,
  recruitNumber,
}: {
  onEditClick: () => void;
  isEditing: boolean;
  handleSave: () => void;
  onCancel: () => void;
  recruitPeriod: string;
  recruitTarget: string;
  recruitNumber: string;
}) {
  return (
    <div className={S.container}>
      <div className={S.contentBox}>
        <div className={S.flexRow}>
          <div className={S.grayText}>모집기간</div>
          <div className={S.blackText}>{recruitPeriod}</div>
        </div>
        <div className={S.flexRow}>
          <div className={S.grayText}>모집대상</div>
          <div className={S.blackText}>{recruitTarget}</div>
        </div>
        <div className={S.flexRow}>
          <div className={S.grayText}>모집인원</div>
          <div className={S.blackText}>{recruitNumber}</div>
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
