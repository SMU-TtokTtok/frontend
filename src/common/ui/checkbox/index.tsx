import React, { forwardRef, InputHTMLAttributes } from 'react';
import * as S from './checkbox.css';
import Image from 'next/image';

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'primary' | 'none';
  label?: string;
  isSelected?: boolean;
  img?: string;
  imgSize?: string;
}

export default forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { variant = 'none', label, className, img, imgSize, defaultChecked, ...props }: CheckboxProps,
  ref?,
) {
  const checkImgStyle = `${S.checkBaseStyle} ${imgSize}`;
  const classNames = `${S.checkboxBase} ${S.checkboxStyle[variant]} ${className ?? ''}`;
  return (
    <div className={S.checkboxContainer}>
      <input type="checkbox" className={classNames} {...props} ref={ref} />
      {img && defaultChecked && <Image src={img} alt={'체크표시'} className={checkImgStyle} />}
      {label && <label className={S.checkboxLabel}>{label}</label>}
    </div>
  );
});
