import * as S from './header.css';
import Image from 'next/image';
import editIcon from '@/assets/edit.svg';
import closeIcon from '@/assets/close.svg';

export default function Header({
  isEditing,
  setIsEditing,
}: {
  isEditing: boolean;
  setIsEditing: (isEditing: boolean) => void;
}) {
  return (
    <div className={S.headerContainer}>
      <div className={S.title}>👥 부원 명단</div>
      <div className={S.iconContainer}>
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
