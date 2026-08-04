'use client';

import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useInView } from 'react-intersection-observer';
import Button from '@/common/ui/button';
import ConfirmCancelModal from '@/common/components/confirmCancelModal';
import ConfirmModal from '@/common/components/confirmModal';
import LoadingSpinner from '@/common/ui/loading';
import { useClubBoardInfinite } from '@/hooks/useInfiniteCommon';
import { useClubBoardMutation } from '@/hooks/useClubBoard';
import { useModal } from '@/hooks/useModal';
import { ClubBoardFormValues } from '@/common/model/clubBoard';
import { DeleteIcon, EditIcon } from './BoardActionIcons';
import BoardFormModal from './BoardFormModal';
import * as S from './clubBoard.css';

type FormState = { isOpen: false } | { isOpen: true; boardId: string | null };
type FeedbackType = 'success' | 'error';

interface AdminClubBoardProps {
  clubId: string;
}

function AdminClubBoard({ clubId }: AdminClubBoardProps) {
  const [formState, setFormState] = useState<FormState>({ isOpen: false });
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [feedbackType, setFeedbackType] = useState<FeedbackType>('success');
  const {
    isOpen: isFeedbackModalOpen,
    handleModalOpen: handleFeedbackModalOpen,
    handleModalClose: handleFeedbackModalClose,
  } = useModal();
  const { ref, inView } = useInView();

  const { boards, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } =
    useClubBoardInfinite({ clubId });

  const { createBoard, updateBoard, deleteBoard, isSubmitting } = useClubBoardMutation({
    clubId,
    onSuccess: (action) => {
      if (action === 'delete') {
        setDeleteTargetId(null);
      } else {
        setFormState({ isOpen: false });
      }

      const successMessages = {
        create: '활동 등록이 완료되었습니다.',
        update: '활동 수정이 완료되었습니다.',
        delete: '활동 삭제가 완료되었습니다.',
      };

      setFeedbackMessage(successMessages[action]);
      setFeedbackType('success');
      handleFeedbackModalOpen();
    },
    onError: (action) => {
      if (action === 'delete') {
        setDeleteTargetId(null);
      }

      const errorMessages = {
        create: '활동 등록에 실패했어요. 잠시 후 다시 시도해주세요.',
        update: '활동 수정에 실패했어요. 잠시 후 다시 시도해주세요.',
        delete: '활동 삭제에 실패했어요. 잠시 후 다시 시도해주세요.',
      };

      setFeedbackMessage(errorMessages[action]);
      setFeedbackType('error');
      handleFeedbackModalOpen();
    },
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

      {isFetchingNextPage && <LoadingSpinner />}
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

      <ConfirmModal
        type={feedbackType}
        isOpen={isFeedbackModalOpen}
        onClose={handleFeedbackModalClose}
      >
        {feedbackMessage}
      </ConfirmModal>
    </div>
  );
}

export default AdminClubBoard;
