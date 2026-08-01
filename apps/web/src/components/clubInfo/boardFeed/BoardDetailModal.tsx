'use client';

import { useMemo } from 'react';
import { format } from 'date-fns';
import DOMPurify from 'dompurify';
import { useClubBoardDetail } from '@/hooks/useClubBoard';
import { usePreventScroll } from '@/hooks/usepreventScroll';
import * as S from './boardDetailModal.css';

interface BoardDetailModalProps {
  clubId: string;
  boardId: string;
  onClose: () => void;
}

function BoardDetailModal({ clubId, boardId, onClose }: BoardDetailModalProps) {
  const { data, isLoading, isError } = useClubBoardDetail(clubId, boardId);

  usePreventScroll(true);

  // 내용은 에디터가 만든 HTML이므로 소개글과 동일한 허용 목록으로 정화한다
  const sanitizedContent = useMemo(() => {
    if (!data?.content) return '';

    return DOMPurify.sanitize(data.content, {
      ALLOWED_TAGS: [
        'p', 'br', 'strong', 'em', 'u', 's', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
        'ul', 'ol', 'li', 'blockquote', 'code', 'pre', 'a', 'img',
        'table', 'thead', 'tbody', 'tr', 'th', 'td'
      ],
      ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'style', 'target', 'rel'],
      ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
    });
  }, [data?.content]);

  return (
    <div className={S.overlay} onClick={onClose} role="presentation">
      {/* 모달 내부 클릭이 오버레이까지 전파되어 닫히는 것을 막는다 */}
      <div
        className={S.modal}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <button type="button" className={S.closeButton} onClick={onClose} aria-label="닫기">
          ✕
        </button>

        {isLoading && <p className={S.stateText}>불러오는 중...</p>}
        {isError && <p className={S.stateText}>활동을 불러오지 못했어요.</p>}

        {data && (
          <>
            <div className={S.imagePane}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={S.image} src={data.thumbnailUrl} alt={data.title} />
            </div>

            <div className={S.contentPane}>
              <span className={S.clubName}>{data.clubName}</span>
              <div className={S.titleRow}>
                <h2 className={S.title}>{data.title}</h2>
                <span className={S.date}>{format(new Date(data.createdAt), 'yyyy-MM-dd')}</span>
              </div>
              <div className={S.content} dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default BoardDetailModal;
