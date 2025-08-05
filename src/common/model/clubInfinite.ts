import { ClubItemInfo } from '@/common/model/club';

export interface Clubs {
  clubs: ClubItemInfo[];
  size: number;
  hasNext: boolean;
  nextCursor: string | null;
}

export interface ClubsInfiniteWithTotal extends Clubs {
  totalCount: number;
}
