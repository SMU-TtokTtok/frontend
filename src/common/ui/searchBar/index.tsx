import React, { InputHTMLAttributes } from 'react';
import Input from '../input';
import * as S from './searchBar.css';
import Image from 'next/image';

interface SearchBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'style'> {
  icon: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  iconStyle?: string;
  onClick?: () => void;
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

  return (
    <div className={S.searchBarContainer}>
      <Input {...props} className={className} variant={variant} />
      <span className={iconContainerStyle}>
        <Image src={icon} alt="검색" onClick={onClick} />
      </span>
    </div>
  );
}

export default SearchBar;
