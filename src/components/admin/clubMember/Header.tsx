import * as S from './header.css';
import Image from 'next/image';
import editIcon from '@/assets/edit.svg';
import closeIcon from '@/assets/close.svg';
import downloadIcon from '@/assets/download.svg';
import { getExcel } from './api/getExcel';
import { useAuthStore } from '@/common/store/adminAuthStore';

export default function Header({
  isEditing,
  setIsEditing,
}: {
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
}) {
  const { profile } = useAuthStore();
  const handleExcelDownload = async () => {
    const blob = await getExcel(profile!.clubId);

    // 다운로드 링크 생성
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `club_members_${profile!.clubId}.xlsx`;

    // 다운로드 실행
    document.body.appendChild(link);
    link.click();

    // 정리
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className={S.headerContainer}>
      <div className={S.title}>👥 부원 명단</div>
      <div className={S.iconContainer}>
        <div className={S.excelContainer} onClick={handleExcelDownload}>
          <div className={S.excelText}>excel.xlsx</div>
          <Image src={downloadIcon} alt="excel" width={30} height={30} />
        </div>
        {!isEditing && (
          <Image
            width={30}
            height={30}
            src={editIcon}
            alt="edit"
            className={S.editAndCloseIcon}
            onClick={() => setIsEditing(true)}
          />
        )}

        {isEditing && (
          <Image
            width={30}
            height={30}
            src={closeIcon}
            alt="close"
            className={S.editAndCloseIcon}
            onClick={() => setIsEditing(false)}
          />
        )}
      </div>
    </div>
  );
}
