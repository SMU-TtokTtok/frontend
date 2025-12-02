import React from 'react';
import * as S from './applicantDetailModal.css';
import Input from '@/common/ui/input';

function LabelWithText({
  label,
  text,
  className,
}: {
  label: string;
  text: string | number;
  className?: string;
}) {
  return (
    <div className={`${S.LabelWithText} ${className || ''}`}>
      <label className={S.label}>
        {label} <span className={S.essential}>*</span>
      </label>
      <Input variant="secondary" className={S.input} value={text} readOnly />
    </div>
  );
}

export default LabelWithText;
