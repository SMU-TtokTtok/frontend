import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import * as S from './dropdownButton.css';
import Image from 'next/image';
import Arrow from '@/assets/dropdown.svg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof S.dropDownButtonStyle;
  img?: string;
}

function DropDownButton({
  variant = 'default',
  children,
  className,
  disabled,
  img,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const classNames = `${className ?? ''} ${S.baseButtonStyle} ${S.dropDownButtonStyle[variant]} `;

  return (
    <button type="button" className={`${classNames}`} disabled={disabled} {...props}>
      {children}
      <Image src={img ?? Arrow} alt="드롭다운" />
    </button>
  );
}

export default DropDownButton;
