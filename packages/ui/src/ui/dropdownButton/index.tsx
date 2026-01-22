import type { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react';
import * as S from './dropdownButton.css';
import Arrow from '@/assets/dropdown.svg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof S.dropDownButtonStyle;
  img?: ReactNode;
}

export function DropDownButton({
  variant = 'default',
  children,
  className,
  disabled,
  img,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const classNames = `${className ?? ''} ${S.baseDropdownButtonStyle} ${
    S.dropDownButtonStyle[variant]
  } `;

  return (
    <button type="button" className={`${classNames}`} disabled={disabled} {...props}>
      {children}
      {img ?? <img src={Arrow} alt="드롭다운" />}
    </button>
  );
}
