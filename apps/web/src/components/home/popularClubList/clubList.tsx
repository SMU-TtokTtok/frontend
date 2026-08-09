'use client';
import ClubItem from '@/common/components/clubItem';
import * as S from './popularClubList.css';
import { usePopularClubList } from '@/hooks/usePopularClubList';
import Empty from '@/common/components/empty';
import { useState } from 'react';
import { useModal } from '@/hooks/useModal';
import ConfirmModal from '@/common/components/confirmModal';

function ClubList() {
  const { data } = usePopularClubList();
  const { isOpen, handleModalClose, handleModalOpen } = useModal();
  const [favoriteModalMessage, setFavoriteModalMessage] = useState('');

  const handleFavoriteResult = (favorited: boolean) => {
    setFavoriteModalMessage(
      favorited ? '즐겨찾기에 추가했어요.' : '즐겨찾기를 취소했어요.',
    );
    handleModalOpen();
  };

  return (
    <>
      {data.clubs.length > 0 && (
        <ul className={S.PopularClubListWrapper}>
          {data.clubs.map((club) => (
            <ClubItem
              clubData={club}
              key={club.id}
              className={S.cardStyle}
              onFavoriteResult={handleFavoriteResult}
            />
          ))}
        </ul>
      )}
      {!data ||
        (data.clubs.length === 0 && (
          <div className={S.emptyWrapper}>
            <Empty className={S.empty}>아직 인기동아리가 없어요!</Empty>
          </div>
        ))}
      <ConfirmModal isOpen={isOpen} onClose={handleModalClose}>
        {favoriteModalMessage}
      </ConfirmModal>
    </>
  );
}

export default ClubList;
