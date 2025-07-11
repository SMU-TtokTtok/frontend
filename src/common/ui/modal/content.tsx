import { forwardRef, PropsWithChildren } from 'react';
import * as S from './modal.css';
interface ContentProps extends PropsWithChildren {
  className?: string;
}
const Content = forwardRef<HTMLDivElement, ContentProps>(function Content(
  { children, className, ...props },
  ref,
) {
  const classNames = `${S.modalContent} ${className ?? ''}`;
  return (
    <div ref={ref} {...props} className={classNames}>
      {children}
    </div>
  );
});

export default Content;
