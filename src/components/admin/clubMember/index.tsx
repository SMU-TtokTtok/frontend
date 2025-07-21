'use client';

import { useState } from 'react';
import * as S from './index.css';
import SearchBarArea from './SearchBarArea';

export default function ClubMemberPage() {
  const [search, setSearch] = useState('');
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <div className={S.wrapper}>
      <div className={S.container}>
        <div className={S.title}>👥 부원 명단</div>
        <SearchBarArea search={search} handleSearchChange={handleSearchChange} />
      </div>
    </div>
  );
}
