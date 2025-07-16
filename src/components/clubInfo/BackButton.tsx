'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import arrow from '@/assets/arrow.svg';

const backFlex = {
  display: 'flex',
  marginTop: '79.5px',
  alignItems: 'center',
};

const backContainer = {
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
};

const backText = {
  fontSize: '18px',
  fontWeight: 500,
};

export default function BackButton() {
  const router = useRouter();
  return (
    <div style={backFlex}>
      <div style={backContainer} onClick={() => router.back()}>
        <Image src={arrow} alt="arrow" width={24} height={24} />
        <span style={backText}>뒤로가기</span>
      </div>
    </div>
  );
}
