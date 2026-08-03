'use client';

import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useInView } from 'react-intersection-observer';
import Button from '@/common/ui/button';
import ConfirmCancelModal from '@/common/components/confirmCancelModal';
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

function EditIcon() {
  return (
    <svg className={S.actionIcon} viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M13.86 3.62a1.9 1.9 0 0 1 2.69 2.69l-8.9 8.9-3.58.9.9-3.58 8.89-8.91Zm1.63 1.07a.4.4 0 0 0-.56 0l-.77.77.56.56.77-.77a.4.4 0 0 0 0-.56ZM6.32 13.33l-.24.94.94-.24 6.64-6.64-.7-.7-6.64 6.64Z"
        fill="currentColor"
      />
    </svg>
  );
}

function DeleteIcon() {
  return (
    <svg className={S.actionIcon} viewBox="0 0 20 20" aria-hidden="true">
      <path
        d="M7.5 3.25A1.75 1.75 0 0 1 9.25 1.5h1.5a1.75 1.75 0 0 1 1.75 1.75V4h3.25a.75.75 0 0 1 0 1.5h-.55l-.78 10.16A3.05 3.05 0 0 1 11.38 18H8.62a3.05 3.05 0 0 1-3.04-2.34L4.8 5.5h-.55a.75.75 0 0 1 0-1.5H7.5v-.75Zm1.5.75h2v-.75a.25.25 0 0 0-.25-.25h-1.5a.25.25 0 0 0-.25.25V4Zm-2.7 1.5.77 9.94c.08.62.61 1.06 1.24 1.06h3.38c.63 0 1.16-.44 1.24-1.06l.77-9.94H6.3Zm2.45 2.25a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Zm2.5 0a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75Z"
        fill="currentColor"
      />
    </svg>
  );
}

function AdminClubBoard({ clubId }: AdminClubBoardProps) {
  const [formState, setFormState] = useState<FormState>({ isOpen: false });
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
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

    if (thumbnail) {
      createBoard({ values, thumbnail });
    }
  };

  const handleDeleteConfirm = () => {
    if (!deleteTargetId) return;

    deleteBoard(deleteTargetId);
  };

  return (
    <div className={S.panel}>
      <div className={S.header}>
        <p className={S.description}>등록한 활동은 동아리 상세 페이지의 활동 탭에 보여요.</p>
        <Button
          variant="primary"
          className={S.createButton}
          onClick={() => setFormState({ isOpen: true, boardId: null })}
        >
          활동 등록
        </Button>
      </div>

      {isLoading && <LoadingSpinner />}

      {!isLoading &&
        (boards.length === 0 ? (
          <p className={S.emptyText}>등록된 활동이 없어요.</p>
        ) : (
          <ul className={S.grid}>
            {boards.map((board) => (
              <li key={board.boardId} className={S.card}>
                <div className={S.thumbnailBox}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className={S.thumbnail}
                    src={board.thumbnailUrl}
                    alt="활동 대표 이미지"
                    loading="lazy"
                  />
                  <div className={S.thumbnailDim} />
                  <div className={S.cardActions}>
                    <button
                      type="button"
                      className={S.actionButton}
                      aria-label="활동 수정"
                      onClick={() => setFormState({ isOpen: true, boardId: board.boardId })}
                    >
                      <EditIcon />
                      <span className={S.actionLabel}>수정</span>
                    </button>
                    <button
                      type="button"
                      className={`${S.actionButton} ${S.deleteButton}`}
                      aria-label="활동 삭제"
                      onClick={() => setDeleteTargetId(board.boardId)}
                    >
                      <DeleteIcon />
                      <span className={S.actionLabel}>삭제</span>
                    </button>
                  </div>
                </div>
                <div className={S.cardFooter}>
                  <span className={S.cardDate}>
                    {format(new Date(board.createdAt), 'yyyy.MM.dd')}
                  </span>
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

      <ConfirmCancelModal
        isOpen={Boolean(deleteTargetId)}
        onClose={() => setDeleteTargetId(null)}
        onConfirm={handleDeleteConfirm}
        title="활동 삭제"
        message={
          <>
            이 활동을 삭제할까요?
            <br />
            삭제하면 동아리 상세 페이지에서도 더 이상 보이지 않으며, 되돌릴 수 없어요.
          </>
        }
      />
    </div>
  );
}

export default AdminClubBoard;
