'use client';

import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useInView } from 'react-intersection-observer';
import Button from '@/common/ui/button';
import LoadingSpinner from '@/common/ui/loading';
import { useClubBoardInfinite } from '@/hooks/useInfiniteCommon';
import { useClubBoardMutation } from '@/hooks/useClubBoard';
import { ClubBoardFormValues } from '@/common/model/clubBoard';
import BoardFormModal from './BoardFormModal';
import * as S from './clubBoard.css';

type FormState = { isOpen: false } | { isOpen: true; boardId: string | null };

interface AdminClubBoardProps {
  clubId: string;
}

/** 관리자 "동아리 정보 관리"의 게시글 탭 내용 */
function AdminClubBoard({ clubId }: AdminClubBoardProps) {
  const [formState, setFormState] = useState<FormState>({ isOpen: false });
  const { ref, inView } = useInView();

  const { boards, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useClubBoardInfinite({ clubId });

  const { createBoard, updateBoard, deleteBoard, isSubmitting } = useClubBoardMutation({
    clubId,
    onSuccess: () => setFormState({ isOpen: false }),
  });

  useEffect(() => {
    if (inView && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, isFetchingNextPage, fetchNextPage]);

  const handleSubmit = (values: ClubBoardFormValues, thumbnail: File | null) => {
    if (!formState.isOpen) return;

    if (formState.boardId) {
      updateBoard({ boardId: formState.boardId, values, thumbnail });
      return;
    }

    // 생성은 모달에서 썸네일 필수 검증을 통과한 뒤에만 호출된다
    if (thumbnail) {
      createBoard({ values, thumbnail });
    }
  };

  const handleDelete = (boardId: string) => {
    if (window.confirm('이 게시글을 삭제할까요? 삭제하면 되돌릴 수 없어요.')) {
      deleteBoard(boardId);
    }
  };

  return (
    <div className={S.panel}>
      <div className={S.header}>
        <p className={S.description}>등록한 게시글은 동아리 상세 페이지의 게시글 탭에 보여요.</p>
        <Button
          variant="primary"
          className={S.createButton}
          onClick={() => setFormState({ isOpen: true, boardId: null })}
        >
          게시글 등록
        </Button>
      </div>

      {isLoading && <LoadingSpinner />}

      {!isLoading &&
        (boards.length === 0 ? (
          <p className={S.emptyText}>등록된 게시글이 없어요.</p>
        ) : (
          <ul className={S.grid}>
            {boards.map((board) => (
              <li key={board.boardId} className={S.card}>
                <div className={S.thumbnailBox}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className={S.thumbnail}
                    src={board.thumbnailUrl}
                    alt="게시글 대표 이미지"
                    loading="lazy"
                  />
                </div>
                <div className={S.cardFooter}>
                  <span className={S.cardDate}>
                    {format(new Date(board.createdAt), 'yyyy.MM.dd')}
                  </span>
                  <div className={S.cardActions}>
                    <button
                      type="button"
                      className={S.actionButton}
                      onClick={() => setFormState({ isOpen: true, boardId: board.boardId })}
                    >
                      수정
                    </button>
                    <button
                      type="button"
                      className={`${S.actionButton} ${S.deleteButton}`}
                      onClick={() => handleDelete(board.boardId)}
                    >
                      삭제
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        ))}

      {isFetchingNextPage && <p className={S.loadingMore}>불러오는 중...</p>}
      <div ref={ref} className={S.observerTarget} />

      {formState.isOpen && (
        <BoardFormModal
          clubId={clubId}
          boardId={formState.boardId}
          isSubmitting={isSubmitting}
          onSubmit={handleSubmit}
          onClose={() => setFormState({ isOpen: false })}
        />
      )}
    </div>
  );
}

export default AdminClubBoard;
