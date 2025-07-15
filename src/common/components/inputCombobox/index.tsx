'use client';
import { InputHTMLAttributes, useState } from 'react';
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
  onClick?: () => void;
}

function InputCombobox<T extends { id: number; name: string; separation: string }>({
  className,
  img,
  iconStyle,
  variant = 'primary',
  placeholder,
  comboBoxList,
  isComboBoxOpen = false,
  onClick,
  ...props
}: InputComboboxProps<T>) {
  const [open, setOpen] = useState(isComboBoxOpen);
  const container = `${S.container} ${className}`;

  const handleClose = () => {
    setOpen(!open);
  };

  const boxRef = useOutsideClick<HTMLUListElement>(() => handleClose());

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
        {comboBoxList && isComboBoxOpen && <Combobox comboBoxList={comboBoxList} ref={boxRef} />}
      </div>
    </>
  );
}

export default InputCombobox;
