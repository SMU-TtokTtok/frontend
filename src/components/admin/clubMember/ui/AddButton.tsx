import Button from '@/common/ui/button';
import add_circle_gray from '@/assets/add_circle_gray.svg';
import * as S from './index.css';
import Image from 'next/image';

interface AddButtonProps {
  role: string;
  onClick: () => void;
}

export default function AddButton({ role, onClick }: AddButtonProps) {
  return (
    <Button variant="lightGray" className={S.button} onClick={onClick}>
      <Image src={add_circle_gray} alt="add_circle" width={24} height={24} />
      <span className={S.text}>{role} 추가</span>
    </Button>
  );
}
