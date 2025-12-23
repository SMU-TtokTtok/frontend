import { type InputHTMLAttributes, type ReactNode } from 'react';
import { Input } from '../input';
import * as S from './searchBar.css';

interface SearchBarProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'style'> {
  icon: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  iconStyle?: string;
  onClick?: () => void;
}

export function SearchBar({
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
      <span className={iconContainerStyle} onClick={onClick}>
        {icon}
      </span>
    </div>
  );
}
