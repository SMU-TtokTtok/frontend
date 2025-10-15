'use client';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import drag from '@/assets/drag.svg';
import Image from 'next/image';
import { dragHandle, dragWrapper, formFeildBlock } from './questionFrom.css';

interface SortableFieldWrapperProps {
  id: string;
  children: React.ReactNode;
}

export default function SortableFieldWrapper({ id, children }: SortableFieldWrapperProps) {
  const { attributes, listeners, setNodeRef, transform } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    width: '100%',
  };

  return (
    <div ref={setNodeRef} style={style} className={formFeildBlock}>
      <div {...attributes} {...listeners} className={dragWrapper}>
        <Image src={drag} alt="drag-handle" className={dragHandle} />
      </div>

      <div>{children}</div>
    </div>
  );
}
