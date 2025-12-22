import { forwardRef, type InputHTMLAttributes } from 'react';
import * as S from './input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  isError?: boolean;
  errorMessage?: string;
}
export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  { variant = 'primary', className, isError = false, errorMessage, ...props }: InputProps,
  ref,
) {
  const classNames = `${S.baseinputStyle({ isError })} ${className ?? ''} ${
    S.inputStyle[variant]
  } `;

  return (
    <>
      <input className={classNames} ref={ref} {...props} />
      {isError && <span className={S.errorMessage}>{errorMessage}</span>}
    </>
  );
});
