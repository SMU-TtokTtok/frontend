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

function BoardDetailSkeleton() {
  return (
    <>
      <div className={S.skeletonImagePane} aria-hidden="true">
        <div className={S.skeletonImage} />
      </div>

      <div className={S.skeletonContentPane} aria-hidden="true">
        <div className={S.skeletonClubName} />
        <div className={S.skeletonTitleGroup}>
          <div className={S.skeletonTitle} />
          <div className={S.skeletonDate} />
        </div>
        <div className={S.skeletonDivider} />
        <div className={S.skeletonBody}>
          <div className={S.skeletonLine} />
          <div className={S.skeletonLine} />
          <div className={S.skeletonLineShort} />
        </div>
      </div>
    </>
  );
}

function BoardDetailModal({ clubId, boardId, onClose }: BoardDetailModalProps) {
  const { data, isLoading } = useClubBoardDetail(clubId, boardId);

  usePreventScroll(true);

  const content = data?.content;

  const sanitizedContent = useMemo(() => {
    if (!content) return '';

    return DOMPurify.sanitize(content, {
      ALLOWED_TAGS: [
        'p',
        'br',
        'strong',
        'em',
        'u',
        's',
        'h1',
        'h2',
        'h3',
        'h4',
        'h5',
        'h6',
        'ul',
        'ol',
        'li',
        'blockquote',
        'code',
        'pre',
        'a',
        'img',
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
      ],
      ALLOWED_ATTR: ['href', 'src', 'alt', 'title', 'class', 'style', 'target', 'rel'],
      ALLOWED_URI_REGEXP:
        /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
    });
  }, [content]);

  return (
    <div className={S.overlay} onClick={onClose} role="presentation">
      <div
        className={S.modal}
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-busy={isLoading}
      >
        <button type="button" className={S.closeButton} onClick={onClose} aria-label="닫기">
          ×
        </button>

        {isLoading && <BoardDetailSkeleton />}

        {data && (
          <>
            <div className={S.imagePanel}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className={S.image} src={data.thumbnailUrl} alt={data.title} />
            </div>

            <div className={S.contentPanel}>
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
