'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useClubBoardInfinite } from '@/hooks/useInfiniteCommon';
import BoardDetailModal from './BoardDetailModal';
import * as S from './boardFeed.css';

/** 첫 로딩은 데스크톱 기준 2줄, 다음 페이지는 1줄만 채운다 */
const INITIAL_SKELETON_COUNT = 8;
const NEXT_PAGE_SKELETON_COUNT = 4;

interface BoardFeedProps {
  clubId: string;
}

/** 실제 썸네일과 같은 자리를 미리 차지해 로딩이 끝나도 레이아웃이 밀리지 않는다 */
const SkeletonItems = ({ count }: { count: number }) => (
  <>
    {Array.from({ length: count }, (_, index) => (
      <li key={`skeleton-${index}`} className={S.skeletonItem} aria-hidden="true" />
    ))}
  </>
);

function BoardFeed({ clubId }: BoardFeedProps) {
  const { boards, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useClubBoardInfinite({ clubId });
  const [selectedBoardId, setSelectedBoardId] = useState<string | null>(null);
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) {
    return (
      <div className={S.container}>
        <ul className={S.grid} aria-busy="true" aria-label="활동 불러오는 중">
          <SkeletonItems count={INITIAL_SKELETON_COUNT} />
        </ul>
      </div>
    );
  }

  return (
    <div className={S.container}>
      {boards.length === 0 ? (
        <p className={S.emptyText}>아직 등록된 활동이 없어요.</p>
      ) : (
        <ul className={S.grid}>
          {boards.map((board) => (
            <li key={board.boardId}>
              <button
                type="button"
                className={S.gridItem}
                onClick={() => setSelectedBoardId(board.boardId)}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className={S.thumbnail}
                  src={board.thumbnailUrl}
                  alt="동아리 활동 사진"
                  loading="lazy"
                />
              </button>
            </li>
          ))}
          {/* 다음 페이지도 같은 그리드 안에서 채워야 스크롤 위치가 튀지 않는다 */}
          {isFetchingNextPage && <SkeletonItems count={NEXT_PAGE_SKELETON_COUNT} />}
        </ul>
      )}

      <div ref={ref} className={S.observerTarget} />

      {selectedBoardId && (
        <BoardDetailModal
          clubId={clubId}
          boardId={selectedBoardId}
          onClose={() => setSelectedBoardId(null)}
        />
      )}
    </div>
  );
}

export default BoardFeed;
