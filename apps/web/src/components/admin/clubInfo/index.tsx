'use client';

import * as S from '@/components/admin/clubInfo/index.css';
import clubImg from '@/assets/clubImg.svg';
import Image from 'next/image';
import ClubBox from '@/components/admin/clubInfo/ClubBox';
import MDEditor from '@/components/admin/clubInfo/MDEditor';
import RightSideBar from '@/components/admin/clubInfo/RightSideBar';
import { useState, useRef, useEffect } from 'react';
import { AdminClubIntro } from '@/common/model/clubIntro';
import EditIcon from '@/assets/edit-photo.svg';
import { useAdminClubInfo, useAdminClubPatch } from '@/hooks/useClubInfo';
import ConfirmModal from '@/common/components/confirmModal';
import { useModal } from '@/hooks/useModal';
import { useAuthStore } from '@/common/store/adminAuthStore';
import LoadingSpinner from '@/common/ui/loading';

function AdminClubInfo() {
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { profile } = useAuthStore();

  const { data, isLoading } = useAdminClubInfo(profile?.clubId ?? '');
  const [clubInfo, setClubInfo] = useState<AdminClubIntro | null>(data || null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const { isOpen, handleModalClose, handleModalOpen } = useModal();
  const { handleClubInfoPatch } = useAdminClubPatch(handleModalOpen, profile?.clubId ?? '');

  const handleClubInfoChange = (updated: Partial<AdminClubIntro>) => {
    setClubInfo((prev) => (prev ? { ...prev, ...updated } : prev));
  };

  const getChangedFields = (): Partial<AdminClubIntro> => {
    if (!clubInfo || !data) return {};

    const changedFields: Partial<AdminClubIntro> = {};

    // 각 필드를 비교하여 변경된 것만 추출 (profileImageUrl 제외)
    Object.keys(clubInfo).forEach((key) => {
      const typedKey = key as keyof AdminClubIntro;
      if (typedKey !== 'profileImageUrl' && clubInfo[typedKey] !== data[typedKey]) {
        (changedFields as Record<string, unknown>)[key] = clubInfo[typedKey];
      }
    });

    return changedFields;
  };

  const handleSave = async () => {
    const changedFields = getChangedFields();
    handleClubInfoPatch(changedFields, selectedFile);
    setIsEditing(false);
  };

  useEffect(() => {
    if (data) {
      setClubInfo(data);
    }
    setSelectedFile(null);
  }, [data, isEditing]); // <- data 변경 감지

  const emptyAdminClub: AdminClubIntro = {
    name: '',
    clubType: '',
    clubCategory: '',
    customCategory: '',
    recruiting: false,
    summary: '',
    profileImageUrl: '',
    clubMemberCount: 0,
    applyStartDate: '',
    applyDeadLine: '',
    grades: [],
    maxApplyCount: 0,
    content: '',
    clubUniv: '',
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <div className={S.container}>
        <div className={S.wrapper}>
          <div className={S.title}>📑 동아리 정보 관리</div>
          <div className={S.flexRow}>
            <div
              className={S.imgContainer}
              onClick={() => {
                if (isEditing && fileInputRef.current) fileInputRef.current.click();
              }}
            >
               <Image
                src={clubInfo?.profileImageUrl || clubImg}
                alt="동아리 사진"
                width={212}
                height={224}
                className={`${S.imgStyle} ${isEditing ? 'editing' : ''}`}
              />
              {isEditing && (
                <Image src={EditIcon} alt="edit" width={48} height={48} className={S.editIcon} />
              )}
            </div>
            {isEditing && (
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const url = URL.createObjectURL(file);
                    setClubInfo((prev) => (prev ? { ...prev, profileImageUrl: url } : prev));
                    setSelectedFile(file);
                  }
                }}
              />
            )}

            <ClubBox
              {...(clubInfo ?? emptyAdminClub)}
              onChange={handleClubInfoChange}
              isEditing={isEditing}
            />
          </div>
          <RightSideBar
            {...(clubInfo ?? emptyAdminClub)}
            onEditClick={() => setIsEditing(true)}
            isEditing={isEditing}
            handleSave={handleSave}
            onCancel={() => {
              setIsEditing(false);
              // refetch();
            }}
            onChange={handleClubInfoChange}
            // refetch={refetch}
          />
          <MDEditor
            isEditing={isEditing}
            introduction={clubInfo?.content ?? ''}
            onChange={(content) => handleClubInfoChange({ content })}
          />
        </div>
      </div>
      <ConfirmModal isOpen={isOpen} onClose={handleModalClose}>
        저장이 완료되었습니다
      </ConfirmModal>
    </>
  );
}

export default AdminClubInfo;
