'use client';

import { useScrollObserver } from '@/hooks/useScrollObserver';
import { useCombobox } from '@/hooks/useComboBox';
import Desktop from './desktop';
import Mobile from './mobile';
import { useEffect, useMemo, useState } from 'react';
import useTrie from '@/common/store/trieStore';

function ClientHeader() {
  const {
    debouncedSearch,
    isComboBoxOpen,
    setIsComboBoxOpen,
    handleSearchChange,
    handleNavigate,
    handleKeyDown,
  } = useCombobox();
  const isVisible = useScrollObserver();
  const [userName, setUserName] = useState<string | null>(null);

  const search = useTrie((state) => state.search);
  const searchList = useMemo(() => search(debouncedSearch), [debouncedSearch, search]);

  useEffect(() => {
    const name = localStorage.getItem('name');
    setUserName(name);
  }, []);

  return (
    <>
      <Desktop
        isVisible={isVisible}
        isComboBoxOpen={isComboBoxOpen}
        setIsComboBoxOpen={setIsComboBoxOpen}
        handleSearchChange={handleSearchChange}
        handleNavigate={handleNavigate}
        handleKeyDown={handleKeyDown}
        searchList={searchList}
        userName={userName}
      />
      <Mobile
        isVisible={isVisible}
        isComboBoxOpen={isComboBoxOpen}
        setIsComboBoxOpen={setIsComboBoxOpen}
        handleSearchChange={handleSearchChange}
        handleNavigate={handleNavigate}
        handleKeyDown={handleKeyDown}
        searchList={searchList}
        userName={userName}
      />
    </>
  );
}

export default ClientHeader;
