'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import arrow from '@/assets/arrow.svg';
import * as S from './backButton.css';

interface BackButtonProps {
  title?: string;
}

export default function BackButton({ title }: BackButtonProps) {
  const router = useRouter();
  return (
    <div className={S.backFlex}>
      <div className={S.backContainer} onClick={() => router.back()}>
        <Image src={arrow} alt="arrow" width={24} height={24} />
        <span className={S.backText}>{title || '뒤로가기'}</span>
      </div>
    </div>
  );
}
