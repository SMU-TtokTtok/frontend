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

function Page() {
  const [isEditing, setIsEditing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { data } = useAdminClubInfo();
  const [clubInfo, setClubInfo] = useState<AdminClubIntro>(data);

  const { handleClubInfoPatch } = useAdminClubPatch();

  const handleClubInfoChange = (updated: Partial<AdminClubIntro>) => {
    setClubInfo((prev) => (prev ? { ...prev, ...updated } : prev));
  };

  const handleSave = async () => {
    console.log(clubInfo);
    handleClubInfoPatch(clubInfo);
    setIsEditing(false);
    alert('저장되었습니다!');
  };

  useEffect(() => {
    if (data) {
      setClubInfo(data);
    }
  }, [isEditing, data]); // <- data 변경 감지

  return (
    <div className={S.container}>
      <div className={S.wrapper}>
        <div className={S.title}>📑 동아리 정보 관리</div>
        <div className={S.flexRow}>
          <div className={S.imgContainer}>
            <Image
              src={
                !clubInfo.profileImageUrl || clubInfo.profileImageUrl === ''
                  ? clubImg
                  : clubInfo.profileImageUrl
              }
              alt="동아리 사진"
              width={212}
              height={224}
              className={`${S.imgStyle} ${isEditing ? 'editing' : ''}`}
              onClick={() => {
                if (isEditing && fileInputRef.current) fileInputRef.current.click();
              }}
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
                  setClubInfo((prev) => (prev ? { ...prev, img: url } : prev));
                }
              }}
            />
          )}

          <ClubBox {...clubInfo} onChange={handleClubInfoChange} isEditing={isEditing} />
        </div>
        <RightSideBar
          {...clubInfo}
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
          introduction={clubInfo.content}
          onChange={(content) => handleClubInfoChange({ content })}
        />
      </div>
    </div>
  );
}

export default Page;
