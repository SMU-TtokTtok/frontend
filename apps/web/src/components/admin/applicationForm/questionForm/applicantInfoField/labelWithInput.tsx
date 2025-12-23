import Input from '@/common/ui/input';
import React from 'react';
import * as S from '../questionFrom.css';
interface LabelWithInputProps {
  label: string;
  placeholder: string;
  disabled?: boolean;
}

function LabelWithInput({ label, placeholder, disabled }: LabelWithInputProps) {
  return (
    <div className={S.applicantInfoBlock}>
      <label className={S.applicantInfoLabel}>{label}</label>
      <Input
        variant="tertiary"
        className={S.applicantInfoInput}
        placeholder={placeholder}
        disabled={disabled}
      />
    </div>
  );
}

export default LabelWithInput;
