import { PropsWithChildren, ReactNode, useContext } from 'react';
import * as S from './modal.css';
import Image from 'next/image';
import cancel from '@/assets/cancel.svg';
import { ModalContext } from '@/common/store/modalContext';
interface HeaderProps {
  title?: string;
  className?: string;
  img?: ReactNode;
}
function Header({ className, img, title, children, ...props }: PropsWithChildren<HeaderProps>) {
  const { onClose } = useContext(ModalContext);
  const classNames = `${S.headerBaseStyle} ${className ?? ''}`;
  return (
    <header className={classNames} {...props}>
      {title && <label className={S.labelBaseStyle}>{title}</label>}
      {children}
      <div onClick={onClose}>
        {img ? img : <Image src={cancel} alt="모달 닫기 아이콘" className={S.closeButtonStyle} />}
      </div>
    </header>
  );
}

export default Header;
