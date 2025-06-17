import React from 'react';
import * as S from './popularClubList.css';
import ClubList from './clubList';
import { usePopularClubList } from '@/hooks/usePopularClubList';

function PopularClubList() {
  //const { data, isLoading } = usePopularClubList();

  return (
    <div>
      <div className={S.TitleWrapper}>
        <h3 className={S.Title}>🏆 인기 동아리</h3>
        <p className={S.Plus}>더보기</p>
      </div>
      <div>{/* <ClubList clubData={data} /> */}</div>
    </div>
  );
}

export default PopularClubList;
