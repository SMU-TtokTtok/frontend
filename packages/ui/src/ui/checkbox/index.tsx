import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import * as S from './checkbox.css';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'none';
  label?: string;
  isSelected?: boolean;
  img?: ReactNode;
  imgSize?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { variant = 'none', label, className, img, imgSize, defaultChecked, ...props }: CheckboxProps,
  ref?,
) {
  const checkImgStyle = `${S.checkBaseStyle} ${imgSize}`;
  const classNames = `${S.checkboxBase} ${S.checkboxStyle[variant]} ${className ?? ''}`;
  return (
    <div className={S.checkboxContainer}>
      <input type="checkbox" className={classNames} {...props} ref={ref} />
      {img && defaultChecked && <div className={checkImgStyle}>{img}</div>}
      {label && <label className={S.checkboxLabel}>{label}</label>}
    </div>
  );
});
