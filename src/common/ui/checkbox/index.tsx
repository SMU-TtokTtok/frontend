import React, { forwardRef, InputHTMLAttributes } from 'react';
import * as S from './checkbox.css';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'none';
  label?: string;
  isSelected?: boolean;
}

export default forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { variant = 'none', label, className, ...props }: CheckboxProps,
  ref?,
) {
  const classNames = `${S.checkboxBase} ${S.checkboxStyle[variant]} ${className ?? ''}`;
  return (
    <div className={S.checkboxContainer}>
      <input type="checkbox" className={classNames} {...props} ref={ref} />
      {label && <label className={S.checkboxLabel}>{label}</label>}
    </div>
  );
});
