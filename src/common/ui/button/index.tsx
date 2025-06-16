import type { ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { baseButtonStyle, buttonStyle } from './button.css';
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: keyof typeof buttonStyle;
}

function Button({
  variant,
  children,
  className,
  disabled,
  ...props
}: PropsWithChildren<ButtonProps>) {
  const classNames = `${className ?? ''} ${baseButtonStyle} ${
    buttonStyle[variant]
  } `;

  return (
    <button className={`${classNames}`} disabled={disabled} {...props}>
      {children}
    </button>
  );
}

export default Button;
