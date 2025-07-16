import { NextRequest, NextResponse } from 'next/server';

// 더미 데이터 생성 (id: 1 ~ 100)
const TOTAL_CLUBS = 100;
const allClubs = Array.from({ length: TOTAL_CLUBS }, (_, i) => ({
  id: i + 1,
  name: `동아리 ${i + 1}`,
  separation: '학술',
  members: 25 + (i % 10),
  category: ['프로그래밍', 'AI'],
  isRecruiting: i % 2 === 0,
  bookmark: i % 3 === 0,
}));

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const cursor = searchParams.get('cursor');
  const size = Number(searchParams.get('size') ?? 20);
  const sort = searchParams.get('sort') ?? 'latest';
  const name = searchParams.get('name') ?? '';

  // name이 포함된 동아리만 필터링
  let filtered = allClubs;
  if (name) {
    filtered = filtered.filter((club) => club.name.includes(name));
  }

  // 정렬
  if (sort === 'latest') {
    filtered.sort((a, b) => b.id - a.id);
  } else if (sort === 'member') {
    filtered.sort((a, b) => b.members - a.members);
  } else if (sort === 'popular') {
    filtered.sort((a, b) => {
      if (a.bookmark === b.bookmark) return b.id - a.id;
      return b.bookmark ? 1 : -1;
    });
  }

  // 커서 기반 페이징
  let startIdx = 0;
  if (cursor) {
    startIdx = filtered.findIndex((club) => String(club.id) === cursor) + 1;
  }

  const clubs = filtered.slice(startIdx, startIdx + size);
  const nextCursor = clubs.length ? String(clubs[clubs.length - 1].id) : null;
  const hasNext = startIdx + size < filtered.length;

  return NextResponse.json({
    clubs,
    size: clubs.length,
    hasNext,
    nextCursor: hasNext ? nextCursor : null,
    total: filtered.length, // ✅ 총 개수 추가됨
  });
}
