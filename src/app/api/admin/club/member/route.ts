// app/api/members/route.ts
import { NextRequest, NextResponse } from 'next/server';

interface ClubMember {
  memberId: string;
  name: string;
  grade: string;
  major: string;
  role: string;
}

const MOCK_MEMBERS: ClubMember[] = Array.from({ length: 37 }).map((_, i) => ({
  memberId: `${i + 1}`,
  name: `멤버${i + 1}`,
  grade: `${(i % 4) + 1}`,
  major: `학과${(i % 5) + 1}`,
  role: i % 2 === 0 ? '부원' : '임원',
}));

export async function GET(req: NextRequest) {
  const { searchParams } = req.nextUrl;
  const page = parseInt(searchParams.get('page') || '1', 10);
  const size = parseInt(searchParams.get('size') || '5', 10);

  const totalCount = MOCK_MEMBERS.length;
  const totalPage = Math.ceil(totalCount / size);

  const start = (page - 1) * size;
  const end = start + size;
  const clubMembers = MOCK_MEMBERS.slice(start, end);

  return NextResponse.json({
    currentPage: page,
    totalPage,
    totalCount,
    clubMembers,
  });
}
