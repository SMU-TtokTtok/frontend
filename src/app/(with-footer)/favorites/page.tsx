'use client';

import ClubList from '@/components/home/clubList';
import { useSearchQuery } from '@/hooks/useSearchQuery';
import * as S from '@/components/favorites/index.css';
import Button from '@/common/ui/button';
import { useRouter } from 'next/navigation';

export default function Page() {
  const { filter } = useSearchQuery();
  const router = useRouter();

  const getVariant = (value: string) => (filter.sort === value ? 'secondary' : 'none');

  return (
    <div>
      <div className={S.HeaderWrapper}>
        <div className={S.HeaderContainer}>
          <div className={S.TitleText}>즐겨찾기</div>
          <div className={S.SortFlex}>
            <Button
              variant={getVariant('latest')}
              className={S.ButtonStyle}
              onClick={() => router.push('/favorites?sort=latest')}
            >
              최신등록순
            </Button>
            <Button
              variant={getVariant('member')}
              className={S.ButtonStyle}
              onClick={() => router.push('/favorites?sort=member')}
            >
              멤버많은순
            </Button>
            <Button
              variant={getVariant('popular')}
              className={S.ButtonStyle}
              onClick={() => router.push('/favorites?sort=popular')}
            >
              인기도순
            </Button>
          </div>
        </div>
      </div>
      <ClubList selectedOptions={filter} />
    </div>
  );
}
