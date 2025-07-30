import * as S from './memberItem.css';
import Tag from '@/common/ui/tag';
import { getKoreanGrade } from '@/common/util/getKoreanGrade';
import { getRoleDisplayName } from '@/common/util/gerKoreanRole';
import { getGradeStyle2 } from '@/common/util/getGradeStyle';
import cancel from '@/assets/cancel.svg';
import Image from 'next/image';
import { useDeleteClubMember } from '@/hooks/useClubMember';
import DropDown from '@/common/components/dropdown/index';
import DropDownButton from '@/common/ui/dropdownButton';
import { roleItems } from '@/common/constants/adminOptions';
import { usePatchClubMember } from '@/hooks/useClubMember';
import ConfirmModal from '@/common/components/confirmModal';
import { useModal } from '@/hooks/useModal';

interface MemberItemProps {
  memberId: string;
  name: string;
  major: string;
  role: string;
  grade: string;
  isEditing: boolean;
}

export default function MemberItem({
  memberId,
  name,
  major,
  role,
  grade,
  isEditing,
}: MemberItemProps) {
  const { isOpen, handleModalClose, handleModalOpen } = useModal();
  const {
    isOpen: isEditModalOpen,
    handleModalClose: handleEditModalClose,
    handleModalOpen: handleEditModalOpen,
  } = useModal();

  const { handleDeleteClubMember } = useDeleteClubMember(handleModalOpen);
  const { handlePatchClubMember } = usePatchClubMember(handleEditModalOpen);

  return (
    <>
      <div className={S.isEditingContainer[isEditing ? 'true' : 'false']}>
        <div className={S.container}>
          <div className={S.withOutRoleContainer}>
            <Tag variant={getGradeStyle2(grade)} className={S.grade}>
              {getKoreanGrade(grade)}
            </Tag>
            <div className={S.name}>{name}</div>
            <div className={S.bar}>|</div>
            <div className={S.major}>{major}</div>
          </div>
          {isEditing ? (
            <DropDown
              toggleButton={
                <DropDownButton variant="default" className={S.dropDownStyle}>
                  {getRoleDisplayName(role)}
                </DropDownButton>
              }
              panelClassName={S.panelContainer}
            >
              {roleItems.map((item) => (
                <li
                  key={item}
                  className={S.panelItem}
                  onClick={() => handlePatchClubMember({ memberId, role: item })}
                >
                  {item}
                </li>
              ))}
            </DropDown>
          ) : (
            <Tag variant="white" className={S.role}>
              {getRoleDisplayName(role)}
            </Tag>
          )}
        </div>
        {isEditing && (
          <Image
            src={cancel}
            alt="cancel"
            width={30}
            height={30}
            style={{ cursor: 'pointer' }}
            onClick={() => handleDeleteClubMember(memberId)}
          />
        )}
      </div>
      <ConfirmModal isOpen={isOpen} onClose={handleModalClose}>
        삭제가 완료되었습니다
      </ConfirmModal>
      <ConfirmModal isOpen={isEditModalOpen} onClose={handleEditModalClose}>
        수정이 완료되었습니다
      </ConfirmModal>
    </>
  );
}
