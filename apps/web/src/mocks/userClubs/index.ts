import clubList from '../clubList.json';
import appliedClubList from '../appliedClubList.json';
import { http, HttpResponse } from 'msw';

type ClubListResponse = typeof clubList;
type ClubItem = ClubListResponse['clubs'][number];
const BASE_API = process.env.NEXT_PUBLIC_API_URL ?? '';

const getSortedClubs = (clubs: ClubItem[], sort: string | null) => {
  switch (sort) {
    case 'member_count':
      return [...clubs].sort((a, b) => b.clubMemberCount - a.clubMemberCount);
    case 'popular':
      return [...clubs].sort((a, b) => Number(b.bookmarked) - Number(a.bookmarked));
    case 'latest':
    default:
      return [...clubs];
  }
};

const getCursorPage = (clubs: ClubItem[], cursor: string | null, size: number) => {
  const startIndex = cursor ? clubs.findIndex((club) => club.id === cursor) + 1 : 0;
  const slicedClubs = clubs.slice(startIndex, startIndex + size);
  const hasNext = startIndex + size < clubs.length;

  return {
    clubs: slicedClubs,
    size,
    totalCount: clubs.length,
    hasNext,
    nextCursor: hasNext ? slicedClubs.at(-1)?.id ?? null : null,
  };
};

export const favortesClubs = http.get(`${BASE_API}/api/favorites`, () => {
  return HttpResponse.json(clubList, { status: 200 });
});

export const appliedClubs = http.get(`${BASE_API}/api/user/applies/history`, ({ request }) => {
  const url = new URL(request.url);
  const sort = url.searchParams.get('sort');
  const cursor = url.searchParams.get('cursor');
  const size = Number(url.searchParams.get('size') ?? appliedClubList.size);

  const sortedClubs = getSortedClubs(appliedClubList.clubs, sort);
  const page = getCursorPage(sortedClubs, cursor, size);

  return HttpResponse.json(page, { status: 200 });
});

export const searchClubs = http.get(`${BASE_API}/api/clubs/search`, () => {
  return HttpResponse.json(clubList, { status: 200 });
});

export const popularTotalClubs = http.get(`${BASE_API}/api/clubs/popular`, () => {
  return HttpResponse.json(clubList, { status: 200 });
});
