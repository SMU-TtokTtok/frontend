'use client';
import { InputHTMLAttributes } from 'react';
import Combobox from './combobox';
import * as S from './inputCombobox.css';
import SearchBar from '@/common/ui/searchBar';
import { useOutsideClick } from '@/hooks/useOutsideClick';

interface InputComboboxProps<T> extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary';
  className?: string;
  iconStyle?: string;
  img: string;
  comboBoxList?: T[];
  isComboBoxOpen?: boolean;
  setIsComboBoxOpen: (isOpen: boolean) => void;
  setIsSearchBarOpen?: (isOpen: boolean) => void;
  onClick?: () => void;
}

function InputCombobox<T extends { id: string; name: string; clubType: string }>({
  className,
  img,
  iconStyle,
  variant = 'primary',
  placeholder,
  comboBoxList,
  isComboBoxOpen = false,
  setIsComboBoxOpen,
  setIsSearchBarOpen,
  onClick,
  ...props
}: InputComboboxProps<T>) {
  const container = `${S.container} ${className}`;

  const handleClose = () => {
    setIsComboBoxOpen(!isComboBoxOpen);
  };

  const handleSearchBarClose = () => {
    setIsSearchBarOpen?.(false);
  };

  const boxRef = useOutsideClick<HTMLDivElement>(() => handleClose());

  return (
    <>
      <div className={container}>
        <SearchBar
          placeholder={placeholder}
          variant={variant}
          className={S.inputStyle}
          iconStyle={iconStyle}
          icon={img}
          onClick={onClick}
          {...props}
        />
        {comboBoxList && isComboBoxOpen && (
          <Combobox
            comboBoxList={comboBoxList}
            setIsComboBoxOpen={setIsComboBoxOpen}
            ref={boxRef}
            handleSearchBarClose={handleSearchBarClose}
          />
        )}
      </div>
    </>
  );
}

export default InputCombobox;
