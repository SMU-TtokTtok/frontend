'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import arrow from '@/assets/arrow.svg';

const backFlex = {
  display: 'flex',
  cursor: 'pointer',
  marginTop: '79.5px',
  alignItems: 'center',
};

const backText = {
  fontSize: '16px',
  fontWeight: 500,
};

export default function BackButton() {
  const router = useRouter();
  return (
    <div style={backFlex} onClick={() => router.back()}>
      <Image src={arrow} alt="arrow" width={24} height={24} />
      <span style={backText}>뒤로가기</span>
    </div>
  );
}
