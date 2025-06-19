import { PropsWithChildren } from 'react';
import * as S from './tag.css';

interface TagProps {
  variant: keyof typeof S.tagStyle;
  className?: string;
}

function Tag({
  variant,
  children,
  className,
  ...props
}: PropsWithChildren<TagProps>) {
  const classNames = `${className ?? ''}  ${S.tagStyle[variant]}`;
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}

export default Tag;
