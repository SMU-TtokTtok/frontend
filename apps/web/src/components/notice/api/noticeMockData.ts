import type { NoticeDetailResponse } from '@/common/model/notice';

export const noticeMockData: NoticeDetailResponse[] = [
  {
    noticeId: 'notice-1',
    title: '똑똑 서비스 오픈 안내',
    content: '똑똑 서비스가 정식으로 오픈되었습니다. 더 편리한 동아리 지원 경험을 제공하겠습니다.',
    createdBy: '똑똑 운영팀',
    createdAt: '2026-07-26T06:51:30.570Z',
    viewCount: 128,
  },
  {
    noticeId: 'notice-2',
    title: '동아리 모집 일정 안내',
    content: '2026학년도 동아리 모집 일정과 지원 기간을 안내드립니다.',
    createdBy: '똑똑 운영팀',
    createdAt: '2026-07-20T02:30:00.000Z',
    viewCount: 94,
  },
  {
    noticeId: 'notice-3',
    title: '개인정보 처리방침 개정 안내',
    content: '개인정보 처리방침 일부 항목이 개정되어 주요 변경 사항을 안내드립니다.',
    createdBy: '똑똑 운영팀',
    createdAt: '2026-07-12T09:00:00.000Z',
    viewCount: 56,
  },
  {
    noticeId: 'notice-4',
    title: '지원서 제출 기능 업데이트',
    content: '지원서 제출 과정의 안정성을 개선하고 임시 저장 흐름을 보완했습니다.',
    createdBy: '똑똑 운영팀',
    createdAt: '2026-07-05T04:20:00.000Z',
    viewCount: 73,
  },
];
