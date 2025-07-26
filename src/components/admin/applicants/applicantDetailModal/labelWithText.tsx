import React from 'react';
import * as S from './applicantDetailModal.css';
import Input from '@/common/ui/input';

function LabelWithText({ label, text }: { label: string; text: string | number }) {
  return (
    <div className={S.LabelWithText}>
      <label className={S.label}>
        {label} <span className={S.essential}>*</span>
      </label>
      <Input variant="secondary" className={S.input} value={text} readOnly />
    </div>
  );
}

export default LabelWithText;
