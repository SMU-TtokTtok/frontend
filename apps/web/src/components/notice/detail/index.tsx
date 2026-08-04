import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import { ROUTES } from '@/common/constants/routes';
import { getNoticeDetail } from '@/components/notice/api/getNoticeDetail';
import type { NoticeDetailResponse } from '@/common/model/notice';
import { formatNoticeDate } from '@/common/util/formatDate';
import CalendarIcon from '@/assets/calendar.svg';
import Visibility from '@/assets/visibility.svg';
import * as S from './index.css';

interface NoticeDetailProps {
  noticeId: string;
}

interface NoticeDetailArticleProps {
  notice: NoticeDetailResponse;
}

function NoticeDetailArticleSkeleton() {
  return (
    <article aria-label="공지사항 상세 불러오는 중">
      <div className={S.header}>
        <span className={`${S.skeletonBlock} ${S.skeletonTitle}`} />
        <span className={`${S.skeletonBlock} ${S.skeletonMeta}`} />
      </div>
      <div className={S.content}>
        <span className={`${S.skeletonBlock} ${S.skeletonContentLine}`} />
        <span className={`${S.skeletonBlock} ${S.skeletonContentLine}`} />
        <span className={`${S.skeletonBlock} ${S.skeletonContentLine}`} />
        <span className={`${S.skeletonBlock} ${S.skeletonContentLineShort}`} />
      </div>
    </article>
  );
}

export function NoticeDetailEmpty() {
  return (
    <div className={S.pageWrapper}>
      <div className={S.contentWrapper}>
        <div className={S.stateWrapper}>
          <p className={S.stateTitle}>공지사항을 찾을 수 없습니다.</p>
          <p className={S.stateDescription}>삭제되었거나 존재하지 않는 공지사항입니다.</p>
          <div className={S.bottomActions}>
            <Link href={ROUTES.NOTICE} className={S.listLink}>
              목록으로
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function NoticeDetailArticle({ notice }: NoticeDetailArticleProps) {
  return (
    <article>
      <header className={S.header}>
        <h1 className={S.title}>{notice.title}</h1>
        <div className={S.meta}>
          <span className={S.metaItem}>작성자 {notice.createdBy}</span>
          <span className={S.metaItem}>
            <Image src={CalendarIcon} alt="" className={S.metaIcon} />
            {formatNoticeDate(notice.createdAt)}
          </span>
          <span className={S.metaItem}>
            <Image src={Visibility} alt="visibility" className={S.metaIcon} />
            {notice.viewCount}
          </span>
        </div>
      </header>
      <div className={S.content}>{notice.content}</div>
    </article>
  );
}

async function NoticeDetailArticleContainer({ noticeId }: NoticeDetailProps) {
  const data = await getNoticeDetail({ noticeId });

  return <NoticeDetailArticle notice={data} />;
}

export default function NoticeDetail({ noticeId }: NoticeDetailProps) {
  return (
    <div className={S.pageWrapper}>
      <div className={S.contentWrapper}>
        <Link href={ROUTES.NOTICE} className={S.backButton}>
          이전으로
        </Link>

        <Suspense key={noticeId} fallback={<NoticeDetailArticleSkeleton />}>
          <NoticeDetailArticleContainer noticeId={noticeId} />
        </Suspense>

        <div className={S.bottomActions}>
          <Link href={ROUTES.NOTICE} className={S.listLink}>
            목록으로
          </Link>
        </div>
      </div>
    </div>
  );
}
