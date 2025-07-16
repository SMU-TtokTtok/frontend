import { mainClient } from '@/common/apis/ttockTtockClient';
import { ClubsInfinite } from '@/common/model/clubInfinite';

export async function fetchAppliedClubs({
  sort,
  size,
  cursor,
}: {
  sort: string;
  size: number;
  cursor?: string;
}): Promise<ClubsInfinite> {
  const params = new URLSearchParams({ sort, size: String(size) });
  if (typeof cursor === 'string') params.append('cursor', cursor);

  //추후에 url수정 by현우
  const res = await mainClient.get(`/api/clubs/favorites?${params.toString()}`);

  return res;
}
