'use client';

import ClubList from '@/components/home/clubList';
import { useSearchQuery } from '@/hooks/useSearchQuery';
import * as S from '@/components/favorites/index.css';
import Button from '@/common/ui/button';

export default function Page() {
  const { filter } = useSearchQuery();

  return (
    <div>
      <div className={S.HeaderWrapper}>
        <div className={S.HeaderContainer}>
          <div className={S.TitleText}>즐겨찾기</div>
          <div className={S.SortFlex}>
            <Button variant="secondary" className={S.ButtonStyle}>
              최신등록순
            </Button>
            <Button variant="none" className={S.ButtonStyle}>
              멤버많은순
            </Button>
            <Button variant="none" className={S.ButtonStyle}>
              인기도순
            </Button>
          </div>
        </div>
      </div>
      <ClubList selectedOptions={filter} />
    </div>
  );
}
