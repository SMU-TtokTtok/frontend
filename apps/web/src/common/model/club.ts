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
  bookmarked: boolean;
  isDeadlineImminent: boolean;
}

export type clubUniv = 'GLOBAL_AREA' | 'DESIGN' | 'ENGINEERING' | 'CONVERGENCE_TECHNOLOGY' | 'ARTS';
