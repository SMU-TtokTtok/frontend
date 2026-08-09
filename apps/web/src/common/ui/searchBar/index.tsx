import React, { InputHTMLAttributes, useRef } from 'react';
import Input from '../input';
import * as S from './searchBar.css';
import Image from 'next/image';

interface SearchBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'style' | 'onClick'> {
  icon: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  iconStyle?: string;
  onClick?: (value: string) => void;
}

function SearchBar({
  icon,
  variant = 'primary',
  className,
  iconStyle,
  onClick,
  ...props
}: SearchBarProps) {
  const iconContainerStyle = `${S.iconContainerBase} ${iconStyle}`;
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className={S.searchBarContainer}>
      <Input {...props} ref={inputRef} className={className} variant={variant} />
      <span className={iconContainerStyle}>
        <Image src={icon} alt="검색" onClick={() => onClick?.(inputRef.current?.value ?? '')} />
      </span>
    </div>
  );
}

export default SearchBar;
