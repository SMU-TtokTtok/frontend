import { NextRequest, NextResponse } from 'next/server';

// 더미 데이터 생성 (id: 1 ~ 100)
const TOTAL_CLUBS = 100;

const allClubs = [];
// const allClubs = Array.from({ length: TOTAL_CLUBS }, (_, i) => ({
//   id: i + 1,
//   name: `동아리 ${i + 1}`,
//   separation: '학술',
//   members: 25 + (i % 10),
//   category: ['프로그래밍', 'AI'],
//   isRecruiting: i % 2 === 0,
//   bookmark: i % 3 === 0,
// }));

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const cursor = searchParams.get('cursor');
  const size = Number(searchParams.get('size') ?? 20);
  const sort = searchParams.get('sort') ?? 'latest';

  const sorted = [...allClubs];

  if (sort === 'latest') {
    sorted.sort((a, b) => b.id - a.id);
  } else if (sort === 'member') {
    sorted.sort((a, b) => b.members - a.members);
  } else if (sort === 'popular') {
    sorted.sort((a, b) => {
      if (a.bookmark === b.bookmark) return b.id - a.id;
      return b.bookmark ? 1 : -1;
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
