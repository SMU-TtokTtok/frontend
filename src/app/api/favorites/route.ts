import { NextRequest, NextResponse } from 'next/server';

// 더미 데이터 생성 (id: 1 ~ 100)
const TOTAL_CLUBS = 100;

// const allClubs = [];
const allClubs = Array.from({ length: TOTAL_CLUBS }, (_, i) => ({
  id: String(i + 1),
  name: `동아리 ${i + 1}`,
  clubType: 'CENTRAL',
  clubCategory: 'VOLUNTEER',
  customCategory: 'string',
  summary: 'string',
  profileImageUrl: 'string',
  clubMemberCount: 0,
  recruiting: true,
  bookmarked: true,
}));

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const cursor = searchParams.get('cursor');
  const size = Number(searchParams.get('size') ?? 20);
  const sort = searchParams.get('sort') ?? 'latest';

  const sorted = [...allClubs];

  if (sort === 'latest') {
    sorted.sort((a, b) => Number(b.id) - Number(a.id));
  } else if (sort === 'member') {
    sorted.sort((a, b) => b.clubMemberCount - a.clubMemberCount);
  } else if (sort === 'popular') {
    sorted.sort((a, b) => {
      if (a.bookmarked === b.bookmarked) return Number(b.id) - Number(a.id);
      return a.bookmarked ? 1 : -1;
    });
  }

  let startIdx = 0;
  if (cursor) {
    startIdx = sorted.findIndex((club) => String(club.id) === cursor) + 1;
  }

  const clubs = sorted.slice(startIdx, startIdx + size);
  const nextCursor = clubs.length ? String(clubs[clubs.length - 1].id) : null;
  const hasNext = startIdx + size < sorted.length;

  return NextResponse.json({
    clubs,
    size: clubs.length,
    hasNext,
    nextCursor: hasNext ? nextCursor : null,
  });
}
