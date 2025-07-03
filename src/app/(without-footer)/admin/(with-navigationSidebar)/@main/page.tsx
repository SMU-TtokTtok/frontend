'use client';

import * as S from '@/components/admin/clubInfo';
import clubImg from '@/assets/clubImg.svg';
import Image from 'next/image';
import ClubBox from '@/components/admin/clubInfo/ClubBox';
import ClubQuill from '@/components/admin/clubInfo/MDEditor';
import RightSideBar from '@/components/admin/clubInfo/RightSideBar';
import { useState, useEffect, useRef } from 'react';

type ClubInfo = {
  id: number;
  name: string;
  shortDescription: string;
  type: string;
  category: string;
  detailField: string;
  isRecruiting: boolean;
  introduction: string;
  recruitPeriod: string;
  recruitTarget: string;
  recruitNumber: string;
  peopleCount: number;
  img: string;
};

function Page() {
  const [isEditing, setIsEditing] = useState(false);
  const [clubInfo, setClubInfo] = useState<ClubInfo | null>(null);
  const [loading, setLoading] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetch('/api/club-info')
      .then((res) => res.json())
      .then((data) => {
        setClubInfo(data);
        setLoading(false);
      });
  }, []);

  const handleClubBoxChange = (updated: Partial<ClubInfo>) => {
    setClubInfo((prev) => (prev ? { ...prev, ...updated } : prev));
  };
  const handleQuillChange = (introduction: string) => {
    setClubInfo((prev) => (prev ? { ...prev, introduction } : prev));
  };
  const handleSave = async () => {
    if (!clubInfo) return;
    const patchData = {
      img: clubInfo.img,
      type: clubInfo.type,
      category: clubInfo.category,
      shortDescription: clubInfo.shortDescription,
      isRecruiting: clubInfo.isRecruiting,
      detailField: clubInfo.detailField,
      introduction: clubInfo.introduction,
    };
    await fetch('/api/club-info', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(patchData),
    });
    setIsEditing(false);
    alert('저장되었습니다!');
  };

  if (loading || !clubInfo) return <div>로딩중...</div>;

  return (
    <div className={S.container}>
      <div className={S.wrapper}>
        <div className={S.title}>📑 동아리 정보 관리</div>
        <div className={S.flexRow}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Image
              src={!clubInfo.img || clubInfo.img === '' ? clubImg : clubInfo.img}
              alt="동아리 사진"
              width={212}
              height={224}
              style={{
                objectFit: 'cover',
                borderRadius: 8,
                cursor: isEditing ? 'pointer' : 'default',
              }}
              onClick={() => {
                if (isEditing && fileInputRef.current) fileInputRef.current.click();
              }}
            />
            {isEditing && (
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                style={{ marginTop: 8, display: 'none' }}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    const url = URL.createObjectURL(file);
                    setClubInfo((prev) => (prev ? { ...prev, img: url } : prev));
                  }
                }}
              />
            )}
          </div>

          <ClubBox {...clubInfo} onChange={handleClubBoxChange} />
        </div>
        <RightSideBar
          onEditClick={() => setIsEditing(true)}
          isEditing={isEditing}
          handleSave={handleSave}
          onCancel={() => setIsEditing(false)}
          recruitPeriod={clubInfo.recruitPeriod}
          recruitTarget={clubInfo.recruitTarget}
          recruitNumber={clubInfo.recruitNumber}
        />
        <ClubQuill
          isEditing={isEditing}
          introduction={clubInfo.introduction}
          onChange={handleQuillChange}
        />
      </div>
    </div>
  );
}

export default Page;
