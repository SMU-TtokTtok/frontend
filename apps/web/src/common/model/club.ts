// 서버 판정 모집 상태. 이전 서버는 보내지 않으므로 선택 필드
export type RecruitState = 'UPCOMING' | 'OPEN' | 'CLOSED';

export interface ClubItemInfo {
  id: string;
  name: string;
  clubType: string;
  clubCategory: string;
  customCategory: string;
  summary: string;
  profileImageUrl: string;
  clubMemberCount: number;
  recruiting: boolean;
  recruitState?: RecruitState;
  bookmarked: boolean;
  isDeadlineImminent: boolean;
}

export type ClubUniv = 'GLOBAL_AREA' | 'DESIGN' | 'ENGINEERING' | 'CONVERGENCE_TECHNOLOGY' | 'ARTS';
