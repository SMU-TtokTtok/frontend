import { ClubItemInfo } from '@/common/model/club';
import { mainClient } from '@/common/apis/ttockTtockClient';

interface ClubsApiResponse {
  clubs: ClubItemInfo[];
  size: number;
  hasNext: boolean;
  nextCursor: string | null;
}

export async function fetchFavoritesClubs({
  sort,
  size,
  cursor,
}: {
  sort: string;
  size: number;
  cursor?: string;
}): Promise<ClubsApiResponse> {
  const params = new URLSearchParams({ sort, size: String(size) });
  if (typeof cursor === 'string') params.append('cursor', cursor);

  const res = await mainClient.get(`/api/clubs/favorites?${params.toString()}`);
  // const res = await fetch(`/api/clubs/favorites?${params.toString()}`);

  return res;
}
