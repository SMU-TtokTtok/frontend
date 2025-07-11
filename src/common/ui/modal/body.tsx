import { PropsWithChildren } from 'react';
import * as S from './modal.css';
interface BodyProps extends PropsWithChildren {
  className?: string;
}
function Body({ children, className }: BodyProps) {
  return <div className={`${S.modalBody} ${className ?? ''}`}>{children}</div>;
}

export default Body;
