export interface AdminClubIntro {
  id: number;
  name: string;
  shortDescription: string;
  type: string;
  category: string;
  detailField: string;
  isRecruiting: boolean;
  introduction: string;
  recruitStartDate: string;
  recruitEndDate: string;
  recruitTarget: number[];
  recruitNumber: number;
  img: string;
  peopleCount: number;
}

export interface UserClubIntro extends AdminClubIntro {
  isFavorite: boolean;
}
