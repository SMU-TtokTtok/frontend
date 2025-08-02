import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ROUTES } from '@/common/constants/routes';
import Header from '@/common/ui/header';
import mainlogo from '@/assets/mainlogo_wh.svg';
import * as S from './clientHeader.css';
import InputCombobox from '../../inputCombobox';
import SearchIcon from '@/assets/search.svg';
import SearchWhite from '@/assets/search_white.svg';
import hamburger from '@/assets/hambuger.svg';
import Cancel from '@/assets/searchClose.svg';
import { usePreventScroll } from '@/hooks/usepreventScroll';
import MobileSideMenu from './mobileSidemenu';

interface MobileProps<T> {
  isVisible: boolean;
  isComboBoxOpen: boolean;
  setIsComboBoxOpen: (isOpen: boolean) => void;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNavigate: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  searchList: T[];
}

function Mobile<T extends { id: string; name: string; clubType: string }>({
  isVisible,
  isComboBoxOpen,
  setIsComboBoxOpen,
  handleSearchChange,
  handleNavigate,
  handleKeyDown,
  searchList,
}: MobileProps<T>) {
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const handleToggleSearchBar = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
    setIsSideMenuOpen(false);
  };

  const handleToggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
    setIsSearchBarOpen(false);
  };

  usePreventScroll(isSearchBarOpen || isSideMenuOpen);

  return (
    <Header isVisible={isVisible} className={S.MobileInnerWrapper}>
      <Link href={ROUTES.HOME}>
        <Image src={mainlogo} className={S.Logo} alt="Main Logo" />
      </Link>
      <div className={S.RightArea}>
        <Image
          src={isSearchBarOpen ? Cancel : SearchWhite}
          alt="Search"
          className={S.MobileSearchIcon}
          onClick={handleToggleSearchBar}
        />
        {isSearchBarOpen && (
          <div className={S.ComboBoxContainer}>
            <div className={S.MobileBackdrop} />
            <InputCombobox
              className={S.InputCombobox}
              img={SearchIcon}
              iconStyle={S.searchIcon}
              comboBoxList={searchList}
              isComboBoxOpen={isComboBoxOpen}
              setIsComboBoxOpen={setIsComboBoxOpen}
              setIsSearchBarOpen={setIsSearchBarOpen}
              onChange={handleSearchChange}
              onClick={handleNavigate}
              onKeyDown={handleKeyDown}
              placeholder="동아리 이름을 검색하세요."
            />
          </div>
        )}
        <Image src={hamburger} alt="Menu" onClick={handleToggleSideMenu} />
        {isSideMenuOpen && <MobileSideMenu setIsSideMenuOpen={setIsSideMenuOpen} />}
      </div>
    </Header>
  );
}

export default Mobile;
