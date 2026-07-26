'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@/common/ui/button';
import { usePreventScroll } from '@/hooks/usepreventScroll';
import { useClubBoardDetail } from '@/hooks/useClubBoard';
import { ClubBoardFormValues } from '@/common/model/clubBoard';
import BoardContentEditor from './BoardContentEditor';
import { clubBoardSchema, ClubBoardForm } from './schema';
import * as S from './boardFormModal.css';

interface BoardFormModalProps {
  clubId: string;
  /** 값이 있으면 수정, null이면 새 게시글 */
  boardId: string | null;
  isSubmitting: boolean;
  onSubmit: (values: ClubBoardFormValues, thumbnail: File | null) => void;
  onClose: () => void;
}

function BoardFormModal({
  clubId,
  boardId,
  isSubmitting,
  onSubmit,
  onClose,
}: BoardFormModalProps) {
  const isEditMode = Boolean(boardId);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [thumbnail, setThumbnail] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [thumbnailError, setThumbnailError] = useState('');

  // 내용은 에디터가 만드는 HTML. 빈 값 판단은 순수 텍스트로 한다.
  const [content, setContent] = useState('');
  const [contentText, setContentText] = useState('');
  const [contentError, setContentError] = useState('');

  const { data: detail } = useClubBoardDetail(clubId, boardId);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ClubBoardForm>({
    resolver: zodResolver(clubBoardSchema),
    mode: 'onSubmit',
    defaultValues: { title: '' },
  });

  usePreventScroll(true);

  // 수정 모드에서 기존 내용이 도착하면 폼과 미리보기를 채운다
  useEffect(() => {
    if (detail) {
      reset({ title: detail.title });
      setContent(detail.content);
      setPreviewUrl(detail.thumbnailUrl);
    }
  }, [detail, reset]);

  // 새로 고른 파일의 미리보기 URL은 교체/해제 시 반드시 정리한다
  useEffect(() => {
    if (!thumbnail) return;

    const objectUrl = URL.createObjectURL(thumbnail);
    setPreviewUrl(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [thumbnail]);

  const handleContentChange = useCallback((html: string) => setContent(html), []);
  const handleContentTextChange = useCallback((text: string) => setContentText(text), []);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      setThumbnailError('이미지 파일만 등록할 수 있어요.');
      return;
    }

    setThumbnailError('');
    setThumbnail(file);
  };

  const handleFormSubmit = (values: ClubBoardForm) => {
    if (!contentText.trim()) {
      setContentError('내용을 입력해주세요.');
      return;
    }
    setContentError('');

    // 생성 시에는 썸네일이 필수, 수정 시에는 선택
    if (!isEditMode && !thumbnail) {
      setThumbnailError('대표 이미지를 등록해주세요.');
      return;
    }

    onSubmit({ title: values.title.trim(), content }, thumbnail);
  };

  return (
    <div className={S.overlay} onClick={onClose} role="presentation">
      <form
        className={S.modal}
        onClick={(event) => event.stopPropagation()}
        onSubmit={handleSubmit(handleFormSubmit)}
      >
        <div className={S.title}>{isEditMode ? '게시글 수정' : '게시글 등록'}</div>

        <div className={S.field}>
          <label htmlFor="boardTitle" className={S.label}>
            제목
          </label>
          <input
            id="boardTitle"
            className={S.input}
            placeholder="활동 제목을 입력하세요"
            {...register('title')}
          />
          {errors.title && <p className={S.errorText}>{errors.title.message}</p>}
        </div>

        <div className={S.field}>
          <span className={S.label}>내용</span>
          <BoardContentEditor
            value={content}
            onChange={handleContentChange}
            onTextChange={handleContentTextChange}
          />
          {contentError && <p className={S.errorText}>{contentError}</p>}
        </div>

        <div className={S.field}>
          <span className={S.label}>대표 이미지{isEditMode ? ' (변경할 때만 선택)' : ''}</span>
          <div className={S.fileRow}>
            <Button
              type="button"
              variant="secondary"
              className={S.fileButton}
              onClick={() => fileInputRef.current?.click()}
            >
              이미지 선택
            </Button>
            {thumbnail && <span className={S.fileName}>{thumbnail.name}</span>}
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={handleFileChange}
          />
          {previewUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img className={S.preview} src={previewUrl} alt="대표 이미지 미리보기" />
          )}
          {thumbnailError && <p className={S.errorText}>{thumbnailError}</p>}
        </div>

        <div className={S.buttonRow}>
          <Button type="button" variant="secondary" className={S.button} onClick={onClose}>
            취소
          </Button>
          <Button type="submit" variant="primary" className={S.button} disabled={isSubmitting}>
            {isSubmitting ? '저장 중...' : isEditMode ? '수정하기' : '등록하기'}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default BoardFormModal;
