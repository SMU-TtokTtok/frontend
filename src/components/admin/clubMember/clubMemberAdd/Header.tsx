import * as S from './header.css';
import arrow from '@/assets/arrow.svg';
import Image from 'next/image';
import { getRoleDisplayName } from '@/common/util/gerKoreanRole';
import { useRouter } from 'next/navigation';

export default function Header({ role }: { role: string }) {
  const router = useRouter();

  const handleClick = () => {
    router.back();
  };

  return (
    <div className={S.container}>
      <Image
        src={arrow}
        alt="arrow"
        width={30}
        height={30}
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      />
      <div className={S.titleText}>{getRoleDisplayName(role)} 추가</div>
    </div>
  );
}
