'use client';

import { useScrollObserver } from '@/hooks/useScrollObserver';
import { useSearchClubInfinite } from '@/hooks/useSearchClubInfinite';
import { useCombobox } from '@/hooks/useComboBox';
import Desktop from './desktop';
import Mobile from './mobile';
import { useEffect, useState } from 'react';

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
  const { clubs: searchList } = useSearchClubInfinite({ debouncedSearch });
  const [userName, setUserName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    setUserName(name);
    setUserEmail(email);
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
        searchList={searchList ?? []}
        userName={userName}
        userEmail={userEmail}
      />
      <Mobile
        isVisible={isVisible}
        isComboBoxOpen={isComboBoxOpen}
        setIsComboBoxOpen={setIsComboBoxOpen}
        handleSearchChange={handleSearchChange}
        handleNavigate={handleNavigate}
        handleKeyDown={handleKeyDown}
        searchList={searchList ?? []}
        userName={userName}
        userEmail={userEmail}
      />
    </>
  );
}

export default ClientHeader;
