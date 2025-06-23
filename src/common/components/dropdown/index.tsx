'use client';
import { useState } from 'react';
import * as S from './dropdown.css';
import { useOutsideClick } from '@/hooks/useOutsideClick';
interface Props {
  children: React.ReactNode;
  toggleButton: React.ReactNode;
  isOpen?: boolean;
}

function DropDown({ children, toggleButton, isOpen = false }: Props) {
  const [open, setOpen] = useState(isOpen);
  const dropdownRef = useOutsideClick(() => handleClose());

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={S.container} ref={dropdownRef}>
      <div onClick={() => setOpen(!open)}>{toggleButton}</div>
      {open && <ul className={S.panel}>{children}</ul>}
    </div>
  );
}

export default DropDown;
