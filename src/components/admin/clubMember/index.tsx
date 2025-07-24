'use client';

import { useState } from 'react';
import * as S from './index.css';
import SearchBarArea from './SearchBarArea';
import MemberList from './MemberList';
import RightSide from './RightSide';
import SearchResult from './SearchResult';

export default function ClubMemberPage() {
  const [search, setSearch] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div className={S.wrapper}>
      <div className={S.container}>
        <div className={S.title}>👥 부원 명단</div>
        <SearchBarArea search={search} handleSearchChange={handleSearchChange} />
        <RightSide />
        <div className={S.memberPanel}>
          {!search && <MemberList />}
          {search && <SearchResult search={search} />}
        </div>
      </div>
    </div>
  );
}
