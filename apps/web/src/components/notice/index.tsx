'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, type ChangeEvent } from 'react';
import { SearchBar } from '@ttockttock/ui';
import { ROUTES } from '@/common/constants/routes';
import { useNotices } from '@/hooks/useNotices';
import { useDebounce } from '@/hooks/useDebounce';
import type { NoticeItem } from '@/common/model/notice';
import { formatNoticeDate } from '@/common/util/formatDate';
import CalendarIcon from '@/assets/calendar.svg';
import SearchIcon from '@/assets/search.svg';
import Visibility from '@/assets/visibility.svg';
import Article from '@/assets/article.svg';
import * as S from './index.css';

const PAGE_SIZE = 10;
const SKELETON_ITEM_COUNT = 5;
const PAGE_RANGE_SIZE = 5;

const getVisiblePages = (currentPage: number, totalPage: number) => {
  const startPage = Math.max(
    1,
    Math.min(currentPage - Math.floor(PAGE_RANGE_SIZE / 2), totalPage - PAGE_RANGE_SIZE + 1),
  );
  const endPage = Math.min(totalPage, startPage + PAGE_RANGE_SIZE - 1);

  return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
};

function NoticeListSkeleton() {
  return (
    <div className={S.noticeList} aria-label="공지사항 목록 불러오는 중">
      {Array.from({ length: SKELETON_ITEM_COUNT }).map((_, index) => (
        <div key={index} className={S.noticeItem}>
          {index > 0 && <div className={S.divider} />}
          <div className={S.noticeRow}>
            <div className={S.noticeInfo}>
              <span className={`${S.skeletonBlock} ${S.skeletonTitle}`} />
              <div className={S.noticeMeta}>
                <span className={`${S.skeletonBlock} ${S.skeletonMeta}`} />
                <span className={`${S.skeletonBlock} ${S.skeletonMetaSmall}`} />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function EmptyNotice() {
  return (
    <div className={S.emptyState}>
      <Image src={Article} alt="article" className={S.emptyIcon} />
      <p className={S.emptyTitle}>공지사항이 없습니다.</p>
      <p className={S.emptyDescription}>다른 검색어로 공지사항을 찾아보세요.</p>
    </div>
  );
}

function NoticeRow({ notice, showDivider }: { notice: NoticeItem; showDivider: boolean }) {
  return (
    <div className={S.noticeItem}>
      {showDivider && <div className={S.divider} />}
      <Link href={ROUTES.NOTICE_DETAIL(notice.noticeId)} className={S.noticeRow}>
        <div className={S.noticeInfo}>
          <span className={S.noticeTitle}>{notice.title}</span>
          <div className={S.noticeMeta}>
            <span className={S.metaGroup}>
              <Image src={CalendarIcon} alt="" className={S.metaIcon} />
              {formatNoticeDate(notice.createdAt)}
            </span>
            <span className={S.metaGroup}>
              <Image src={Visibility} alt="visibility" className={S.metaIcon} />
              {notice.viewCount}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

interface NoticePaginationProps {
  page: number;
  totalPage: number;
  onPageChange: (nextPage: number) => void;
}

function NoticePagination({ page, totalPage, onPageChange }: NoticePaginationProps) {
  const visiblePages = getVisiblePages(page, totalPage);

  return (
    <nav className={S.pagination} aria-label="공지사항 페이지네이션">
      <button
        type="button"
        className={S.paginationButton}
        onClick={() => onPageChange(page - 1)}
        disabled={page <= 1}
      >
        이전
      </button>
      <div className={S.pageNumbers}>
        {visiblePages.map((pageNumber) => (
          <button
            key={pageNumber}
            type="button"
            className={`${S.pageNumberButton} ${pageNumber === page ? S.pageNumberButtonActive : ''}`}
            onClick={() => onPageChange(pageNumber)}
            aria-current={pageNumber === page ? 'page' : undefined}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      <button
        type="button"
        className={S.paginationButton}
        onClick={() => onPageChange(page + 1)}
        disabled={page >= totalPage}
      >
        다음
      </button>
    </nav>
  );
}

interface NoticeContentProps {
  isLoading: boolean;
  notices: NoticeItem[];
  page: number;
  totalPage: number;
  onPageChange: (nextPage: number) => void;
}

function NoticeContent({ isLoading, notices, page, totalPage, onPageChange }: NoticeContentProps) {
  if (isLoading) return <NoticeListSkeleton />;
  if (notices.length === 0) return <EmptyNotice />;

  return (
    <>
      <div className={S.noticeList}>
        {notices.map((notice, index) => (
          <NoticeRow key={notice.noticeId} notice={notice} showDivider={index > 0} />
        ))}
      </div>

      {totalPage > 1 && (
        <NoticePagination page={page} totalPage={totalPage} onPageChange={onPageChange} />
      )}
    </>
  );
}

export default function Notice() {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [page, setPage] = useState(1);
  const debounceSearch = useDebounce(searchKeyword);

  const { data, isLoading } = useNotices({
    page,
    size: PAGE_SIZE,
    keyword: debounceSearch,
  });

  const notices = data?.notices ?? [];
  const totalCount = data?.totalCount ?? 0;
  const totalPage = data?.totalPage ?? 0;

  const handleChangeSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setPage(1);
    setSearchKeyword(e.target.value);
  };

  const handlePageChange = (nextPage: number) => {
    if (nextPage < 1 || nextPage > totalPage || nextPage === page) return;
    setPage(nextPage);
  };

  return (
    <div className={S.pageWrapper}>
      <div className={S.contentWrapper}>
        <h1 className={S.title}>공지사항</h1>

        <div className={S.toolbar}>
          <span className={S.totalCount}>
            {isLoading ? '공지사항을 불러오는 중입니다.' : `총 ${totalCount}건이 검색되었습니다.`}
          </span>
          <SearchBar
            className={S.searchInput}
            iconStyle={S.searchIconWrapper}
            variant="tertiary"
            value={searchKeyword}
            onChange={handleChangeSearch}
            placeholder="검색어를 입력해주세요"
            aria-label="공지사항 검색"
            icon={<Image src={SearchIcon} alt="" className={S.searchIcon} />}
          />
        </div>

        <NoticeContent
          isLoading={isLoading}
          notices={notices}
          page={page}
          totalPage={totalPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
}
