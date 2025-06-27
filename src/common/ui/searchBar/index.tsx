import React, { InputHTMLAttributes } from 'react';
import Input from '../input';
import * as S from './searchBar.css';
import Image from 'next/image';

interface SearchBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'style'> {
  icon: string;
  variant?: 'primary' | 'secondary';
}

function SearchBar({ icon, variant = 'primary', className, ...props }: SearchBarProps) {
  const iconContainerStyle = `${S.iconContainerBase}`;

  return (
    <div className={S.searchBarContainer}>
      <Input {...props} className={className} variant={variant} />
      <span className={iconContainerStyle}>
        <Image src={icon} alt="검색" />
      </span>
    </div>
  );
}

export default SearchBar;
