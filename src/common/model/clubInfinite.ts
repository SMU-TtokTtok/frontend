import { ClubItemInfo } from '@/common/model/club';

export interface ClubsInfinite {
  clubs: ClubItemInfo[];
  size: number;
  hasNext: boolean;
  nextCursor: string | null;
}

export interface ClubsInfiniteWithTotal extends ClubsInfinite {
  total: number;
}
