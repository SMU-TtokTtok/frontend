/** 목록(썸네일 피드)에 쓰이는 요약 정보 */
export interface ClubBoardSummary {
  boardId: string;
  thumbnailUrl: string;
  createdAt: string;
}

/** 커서 기반 페이지네이션 응답 */
export interface ClubBoardList {
  boards: ClubBoardSummary[];
  hasNext: boolean;
  nextCursor: string | null;
}

export interface ClubBoardDetail {
  boardId: string;
  title: string;
  content: string;
  thumbnailUrl: string;
  clubName: string;
  createdAt: string;
}

export interface ClubBoardCreateResponse {
  boardId: string;
}

/** 생성/수정 요청의 request 파트에 담기는 값 */
export interface ClubBoardFormValues {
  title: string;
  content: string;
}
