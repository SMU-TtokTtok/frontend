export interface ClubIntro {
  id: number;
  name: string;
  shortDescription: string;
  type: string;
  category: string;
  detailField: string;
  isRecruiting: boolean;
  introduction: string;
  recruitPeriod: string;
  recruitTarget: string;
  recruitNumber: string;
  img: string;
  peopleCount: number;
}

export interface UserClubIntro extends ClubIntro {
  isFavorite: boolean;
}
