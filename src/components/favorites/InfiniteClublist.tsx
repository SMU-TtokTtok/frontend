'use client';

import { useInView } from 'react-intersection-observer';
import * as S from '@/components/home/clubList/clubList.css';
import ClubItem from '@/common/components/clubItem';
import { useEffect } from 'react';
import { SearchQueryReturn } from '@/hooks/useSearchQuery';
import Lottie from 'lottie-react';
import animationData from '@/assets/loading.json';
import * as F from './favorites.css';
import Empty from '@/common/components/empty';
import { ClubsInfinite, ClubsInfiniteWithTotal } from '@/common/model/clubInfinite';
import type { InfiniteData } from '@tanstack/react-query';

interface InfiniteClubListProps {
  useInfinite: (params: { enabled: boolean; sort: string; name?: string }) => {
    data: InfiniteData<ClubsInfiniteWithTotal | ClubsInfinite, unknown> | undefined;
    fetchNextPage: () => void;
    hasNextPage: boolean;
    isFetchingNextPage: boolean;
    refetch: () => void;
  };
  selectedOptions: SearchQueryReturn;
  title: string;
  handleTotal?: (data: number) => void;
}

function InfiniteClubList({
  selectedOptions,
  title,
  useInfinite,
  handleTotal,
}: InfiniteClubListProps) {
  const sort = selectedOptions.sort || 'latest';
  const name = selectedOptions.name || '';
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, refetch } = useInfinite({
    enabled: true,
    sort,
    name,
  });

  const clubs = data ? data.pages.flatMap((page) => page.clubs) : [];
  const { ref, inView } = useInView();
  // sort가 바뀌면 무한스크롤 새로 시작 (refetch)
  useEffect(() => {
    refetch();
  }, [sort, name, refetch]);

  // inView가 true가 되면 fetchNextPage 자동 호출
  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  useEffect(() => {
    if (handleTotal) {
      const firstPage = data?.pages[0];
      // total이 있는 경우에만 handleTotal 호출
      if (firstPage && 'total' in firstPage) {
        handleTotal(firstPage.total);
      }
    }
  }, [handleTotal, data]);

  return (
    <>
      {clubs.length === 0 ? (
        <Empty className={F.emptyText}>{title} 목록이 없습니다</Empty>
      ) : (
        <div className={S.container}>
          <ul className={S.innerWrapper}>
            {clubs.map((club) => (
              <ClubItem key={club.id} className={S.cardStyle} clubData={club} />
            ))}
          </ul>
        </div>
      )}

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

export default InfiniteClubList;
