import { mainClient } from '@/common/apis/ttockTtockClient';
import { ClubsInfinite } from '@/common/model/clubInfinite';

export async function fetchSearchClubs({
  sort,
  size,
  cursor,
  name,
}: {
  sort: string;
  size: number;
  cursor?: string;
  name?: string;
}): Promise<ClubsInfinite> {
  // console.log(name, size, sort);
  const params = new URLSearchParams({ sort, name: name || '', size: String(size) });
  // console.log(params.toString());

  if (typeof cursor === 'string') params.append('cursor', cursor);
  //추후 url 변경 필요 by 현우
  const res = await mainClient.get(`/api/clubs/search?${params.toString()}`);

  return res;
}
