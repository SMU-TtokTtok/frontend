import * as S from './header.css';
import Image from 'next/image';
import arrow from '@/assets/arrow.svg';
import { useRouter } from 'next/navigation';

export default function Header({ evaluation }: { evaluation: string }) {
  const router = useRouter();

  return (
    <div className={S.container}>
      <Image
        src={arrow}
        alt="arrow"
        width={30}
        height={30}
        onClick={() => router.back()}
        style={{ cursor: 'pointer' }}
      />
      <div className={S.titleText}>
        {evaluation === 'DOCUMENT' ? '서류' : '면접'} 전형 : 결과 내용 작성
      </div>
    </div>
  );
}
