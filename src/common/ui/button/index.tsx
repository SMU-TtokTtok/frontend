import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import * as S from './button.css';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: keyof typeof S.buttonStyle;
}

function Button({
  variant,
  children,
  className,
  disabled,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const classNames = `${className ?? ''} ${S.baseButtonStyle} ${S.buttonStyle[variant]} `;

  return (
    <button type="button" className={`${classNames}`} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

export default Button;
