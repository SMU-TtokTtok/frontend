'use client';
import { useState } from 'react';
import * as S from './dropdown.css';
import { useOutsideClick } from '@/hooks/useOutsideClick';
interface Props {
  children: React.ReactNode;
  toggleButton: React.ReactNode;
  panelClassName?: string;
  isOpen?: boolean;
}

function DropDown({ children, toggleButton, panelClassName, isOpen = false }: Props) {
  const [open, setOpen] = useState(isOpen);
  const dropdownRef = useOutsideClick(() => handleClose());

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={S.container} ref={dropdownRef}>
      <div
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
      >
        {toggleButton}
      </div>
      {open && <ul className={`${S.panel} ${panelClassName}`}>{children}</ul>}
    </div>
  );
}

export default DropDown;
