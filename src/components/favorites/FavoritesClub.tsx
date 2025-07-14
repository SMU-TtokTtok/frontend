'use client';
import { useFavoritesInfinite } from '@/hooks/useFavoritesInfinite';
import { useInView } from 'react-intersection-observer';
import * as S from '@/components/home/clubList/clubList.css';
import ClubItem from '@/common/components/clubItem';
import { useEffect } from 'react';
import { SearchQueryReturn } from '@/hooks/useSearchQuery';
import Lottie from 'lottie-react';
import animationData from '@/assets/loading.json';
import * as F from './favorites.css';

interface FavoritesClubProps {
  selectedOptions: SearchQueryReturn;
  title: string;
}

function FavoritesClub({ selectedOptions, title }: FavoritesClubProps) {
  const sort = selectedOptions.sort || 'latest';
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } = useFavoritesInfinite({
    enabled: true,
    sort,
  });
  const clubs = data ? data.pages.flatMap((page) => page.clubs) : [];
  const { ref, inView } = useInView();

  // sort가 바뀌면 무한스크롤 새로 시작 (refetch)
  useEffect(() => {
    refetch();
  }, [sort, refetch]);

  // inView가 true가 되면 fetchNextPage 자동 호출
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  return (
    <>
      <div className={S.container}>
        {clubs.length === 0 ? (
          <div className={F.empty}>{title} 목록이 없습니다.</div>
        ) : (
          <ul className={S.innerWrapper}>
            {clubs.map((club) => (
              <ClubItem key={club.id} className={S.cardStyle} clubData={club} />
            ))}
          </ul>
        )}
      </div>

      {/* 관찰용 div: 리스트 끝에 도달하면 inView가 true */}
      <div ref={ref} style={{ height: 1 }} />

      {isFetchingNextPage && (
        <div className={F.lottieContainer}>
          <Lottie
            animationData={animationData}
            loop={true}
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      )}
    </>
  );
}

export default FavoritesClub;
