export interface ClubIntro {
  name: string;
  clubType: string;
  clubCategory: string;
  customCategory: string;
  recruiting: boolean;
  summary: string;
  profileImageUrl: string;
  clubMemberCount: number;
  applyStartDate: string;
  applyDeadLine: string;
  grades: string[];
  maxApplyCount: number;
  content: string;
}

export interface UserClubIntro extends ClubIntro {
  bookmarked: boolean;
}

export interface AdminClubIntro extends ClubIntro {
  clubUniv: string;
}
