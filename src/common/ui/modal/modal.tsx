'use client';
import React, { PropsWithChildren } from 'react';
import ModalProvider from './modalProvider';
import { type ModalContextProps } from '@/common/store/modalContext';
import { createPortal } from 'react-dom';
import Content from './content';
import Body from './body';
import * as S from './modal.css';
import Header from './header';

function Modal({
  children,
  isOpen,
  onClose = (event?: React.SyntheticEvent) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
  },
}: PropsWithChildren<ModalContextProps>) {
  const modalProps: ModalContextProps = {
    isOpen,
    onClose,
  };

  if (typeof window === 'undefined') return null;

  return createPortal(
    <ModalProvider value={modalProps}>
      {isOpen && <div className={S.modalBase}>{children}</div>}
    </ModalProvider>,
    document.body,
  );
}

export default Modal;

Modal.Content = Content;
Modal.Body = Body;
Modal.Header = Header;
