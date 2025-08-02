'use client';

import { useScrollObserver } from '@/hooks/useScrollObserver';
import { useSearchClubInfinite } from '@/hooks/useSearchClubInfinite';
import { useCombobox } from '@/hooks/useComboBox';
import Desktop from './desktop';
import Mobile from './mobile';

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
      />
      <Mobile
        isVisible={isVisible}
        isComboBoxOpen={isComboBoxOpen}
        setIsComboBoxOpen={setIsComboBoxOpen}
        handleSearchChange={handleSearchChange}
        handleNavigate={handleNavigate}
        handleKeyDown={handleKeyDown}
        searchList={searchList ?? []}
      />
    </>
  );
}

export default ClientHeader;
