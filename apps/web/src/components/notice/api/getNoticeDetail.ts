import { mainClient } from '@/common/apis/ttockTtockClient';
import { API } from '@/common/constants/endpoints';
import { NoticeDetailRequest, NoticeDetailResponse } from '@/common/model/notice';
import { noticeMockData } from './noticeMockData';

export const getNoticeDetail = async ({
  noticeId,
}: NoticeDetailRequest): Promise<NoticeDetailResponse> => {
  try {
    const data = await mainClient.get<NoticeDetailResponse>(
      API.USER.NOTICE_DETAIL(noticeId),
    );

    return data;
  } catch (error) {
    if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
      const notice = noticeMockData.find((item) => item.noticeId === noticeId);

      if (notice) {
        return {
          ...notice,
          viewCount: notice.viewCount + 1,
        };
      }
    }

    throw error;
  }
};
