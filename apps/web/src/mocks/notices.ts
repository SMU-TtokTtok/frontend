import { http, HttpResponse } from 'msw';
import { BASE_URL } from '@/common/apis/ttockTtockClient';
import { API } from '@/common/constants/endpoints';
import { NoticesResponse } from '@/common/model/notice';
import { noticeMockData } from '@/components/notice/api/noticeMockData';

export const getNotices = http.get(`${BASE_URL}${API.USER.NOTICES}`, ({ request }) => {
  const url = new URL(request.url);
  const page = Number(url.searchParams.get('page') ?? '1');
  const size = Number(url.searchParams.get('size') ?? '10');
  const keyword = url.searchParams.get('keyword')?.trim().toLowerCase();

  const filteredNotices = keyword
    ? noticeMockData.filter((notice) => notice.title.toLowerCase().includes(keyword))
    : noticeMockData;

  const startIndex = (page - 1) * size;
  const paginatedNotices = filteredNotices.slice(startIndex, startIndex + size);
  const totalPage = Math.ceil(filteredNotices.length / size);

  const response: NoticesResponse = {
    currentPage: page,
    totalPage,
    totalCount: filteredNotices.length,
    notices: paginatedNotices,
  };

  return HttpResponse.json(response, { status: 200 });
});

export const getNoticeDetail = http.get(
  `${BASE_URL}${API.USER.NOTICE_DETAIL(':noticeId')}`,
  ({ params }) => {
    const { noticeId } = params;
    const notice = noticeMockData.find((item) => item.noticeId === noticeId);

    if (!notice) {
      return HttpResponse.json({ message: 'Notice not found' }, { status: 404 });
    }

    return HttpResponse.json(
      {
        ...notice,
        viewCount: notice.viewCount + 1,
      },
      { status: 200 },
    );
  },
);
