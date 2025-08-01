import { mainClient } from '@/common/apis/ttockTtockClient';
import { Clubs } from '@/common/model/clubInfinite';

export async function fetchFavoritesClubs({
  sort,
  size,
  cursor,
}: {
  sort: string;
  size: number;
  cursor?: string;
}): Promise<Clubs> {
  const params = new URLSearchParams({ sort, size: String(size) });
  if (typeof cursor === 'string') params.append('cursor', cursor);

  const res = await mainClient.get(`/api/clubs/favorites?${params.toString()}`);
  // const res = await fetch(`/api/clubs/favorites?${params.toString()}`);

  return res;
}
