'use client';
import React, {
  PropsWithChildren,
  forwardRef,
  ForwardRefExoticComponent,
  RefAttributes,
} from 'react';
import ModalProvider from './modalProvider';
import { type ModalContextProps } from '@/common/store/modalContext';
import { createPortal } from 'react-dom';
import Content from './content';
import Body from './body';
import * as S from './modal.css';
import Header from './header';

interface ModalComponent extends ForwardRefExoticComponent<
  PropsWithChildren<ModalContextProps> & RefAttributes<HTMLDivElement>
> {
  Content: typeof Content;
  Body: typeof Body;
  Header: typeof Header;
}

const Modal = forwardRef<HTMLDivElement, PropsWithChildren<ModalContextProps>>(function Modal(
  {
    children,
    isOpen,
    onClose = (event?: React.SyntheticEvent) => {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
    },
  },
  ref,
) {
  const modalProps: ModalContextProps = {
    isOpen,
    onClose,
  };

  if (typeof window === 'undefined') return null;

  return createPortal(
    <ModalProvider value={modalProps}>
      {isOpen && (
        <div ref={ref} className={S.modalBase}>
          {children}
        </div>
      )}
    </ModalProvider>,
    document.body,
  );
}) as ModalComponent;

Modal.Content = Content;
Modal.Body = Body;
Modal.Header = Header;

export default Modal;
