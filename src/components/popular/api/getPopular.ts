import { mainClient } from '@/common/apis/ttockTtockClient';
import { Clubs } from '@/common/model/clubInfinite';

export async function fetchPopularClubs({
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

  //추후 url 변경 필요 by 현우
  const res = await mainClient.get(`/api/favorites?${params.toString()}`);

  return res;
}
