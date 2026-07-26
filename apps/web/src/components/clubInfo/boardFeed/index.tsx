'use client';

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useClubBoardInfinite } from '@/hooks/useInfiniteCommon';
import LoadingSpinner from '@/common/ui/loading';
import BoardDetailModal from './BoardDetailModal';
import * as S from './boardFeed.css';

interface BoardFeedProps {
  clubId: string;
}

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
        <LoadingSpinner />
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
        </ul>
      )}

      {isFetchingNextPage && <p className={S.loadingMore}>불러오는 중...</p>}
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
