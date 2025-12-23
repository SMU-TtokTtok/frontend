import { PropsWithChildren } from 'react';
import * as S from './empty.css';
interface EmptyProps {
  className?: string;
}

function Empty({ className, children }: PropsWithChildren<EmptyProps>) {
  return (
    <div className={S.emptyBaseStyle}>
      <p className={className}>{children}</p>
    </div>
  );
}

export default Empty;
