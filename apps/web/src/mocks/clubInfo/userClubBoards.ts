import { http, HttpResponse } from 'msw';
import { ClubBoardDetail } from '@/common/model/clubBoard';

const BASE_API = process.env.NEXT_PUBLIC_API_URL ?? '';

const clubBoards: ClubBoardDetail[] = [
  {
    boardId: 'board-1',
    title: 'Spring Project Demo Day',
    content:
      '<p>Members shared the services they built during the spring project sprint.</p><p>Thanks to everyone who joined the demo and feedback session.</p>',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80',
    clubName: 'Coding Club',
    createdAt: '2026-03-12T09:30:00.000Z',
  },
  {
    boardId: 'board-2',
    title: 'Beginner Web Study',
    content:
      '<p>The beginner study covered HTML, CSS, JavaScript, and React basics.</p><p>Study notes and practice missions were shared after each session.</p>',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    clubName: 'Coding Club',
    createdAt: '2026-03-05T11:00:00.000Z',
  },
  {
    boardId: 'board-3',
    title: 'Hackathon Preparation',
    content:
      '<p>Teams formed ideas, checked APIs, and prepared short pitches for the upcoming hackathon.</p>',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80',
    clubName: 'Coding Club',
    createdAt: '2026-02-26T13:20:00.000Z',
  },
  {
    boardId: 'board-4',
    title: 'Algorithm Pair Session',
    content:
      '<p>Members solved graph and dynamic programming problems in pairs, then reviewed multiple approaches together.</p>',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80',
    clubName: 'Coding Club',
    createdAt: '2026-02-19T10:15:00.000Z',
  },
  {
    boardId: 'board-5',
    title: 'Open Source Contribution Day',
    content:
      '<p>We explored issue triage, pull request etiquette, and small first contributions to open source projects.</p>',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1556075798-4825dfaaf498?auto=format&fit=crop&w=800&q=80',
    clubName: 'Coding Club',
    createdAt: '2026-02-12T08:45:00.000Z',
  },
  {
    boardId: 'board-6',
    title: 'Winter Networking Night',
    content:
      '<p>Alumni and current members met to talk about internships, portfolios, and team project experiences.</p>',
    thumbnailUrl:
      'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=800&q=80',
    clubName: 'Coding Club',
    createdAt: '2026-01-29T12:00:00.000Z',
  },
];

export const getUserClubBoards = http.get(`${BASE_API}/api/clubs/:clubId/boards`, ({ request }) => {
  const url = new URL(request.url);
  const size = Number(url.searchParams.get('size') ?? '20');
  const cursor = url.searchParams.get('cursor');
  const startIndex = cursor ? clubBoards.findIndex((board) => board.boardId === cursor) + 1 : 0;
  const endIndex = startIndex + size;
  const boards = clubBoards.slice(startIndex, endIndex).map(({ boardId, thumbnailUrl, createdAt }) => ({
    boardId,
    thumbnailUrl,
    createdAt,
  }));
  const hasNext = endIndex < clubBoards.length;

  return HttpResponse.json(
    {
      boards,
      hasNext,
      nextCursor: hasNext ? boards[boards.length - 1]?.boardId ?? null : null,
    },
    { status: 200 },
  );
});

export const getUserClubBoardDetail = http.get(
  `${BASE_API}/api/clubs/:clubId/boards/:boardId`,
  ({ params }) => {
    const board = clubBoards.find((item) => item.boardId === params.boardId);

    if (!board) {
      return HttpResponse.json({ message: 'Club board not found' }, { status: 404 });
    }

    return HttpResponse.json(board, { status: 200 });
  },
);
