import { ModalContext, type ModalContextProps } from '@/common/store/modalContext';
import React, { PropsWithChildren } from 'react';

function ModalProvider({ value, children }: PropsWithChildren<{ value: ModalContextProps }>) {
  return <ModalContext.Provider value={value}>{children}</ModalContext.Provider>;
}

export default ModalProvider;
