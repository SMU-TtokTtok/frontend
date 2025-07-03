import * as S from '@/components/clubInfo/index.css';
import BackButton from '@/components/clubInfo/BackButton';

export default function Page() {
  return (
    <div className={S.container}>
      <div className={S.wrapper}>
        <BackButton />
      </div>
    </div>
  );
}
