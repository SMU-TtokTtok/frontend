import { PropsWithChildren } from 'react';
import * as S from './tag.css';
import { TagVariant } from './tag.css';

interface TagProps {
  variant: TagVariant;
  className?: string;
}

function Tag({ variant, children, className, ...props }: PropsWithChildren<TagProps>) {
  const classNames = `${className ?? ''} ${S.baseTagStyle} ${S.tagStyle[variant]}`;
  return (
    <div className={classNames} {...props}>
      {children}
    </div>
  );
}

export default Tag;
