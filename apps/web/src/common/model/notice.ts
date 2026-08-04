export interface NoticeItem {
  noticeId: string;
  title: string;
  createdAt: string;
  viewCount: number;
}

export interface NoticeDetailResponse extends NoticeItem {
  content: string;
  createdBy: string;
}

export interface NoticesResponse {
  currentPage: number;
  totalPage: number;
  totalCount: number;
  notices: NoticeItem[];
}

export interface NoticesRequest {
  page?: number;
  size?: number;
  keyword?: string;
}

export interface NoticeDetailRequest {
  noticeId: string;
}
