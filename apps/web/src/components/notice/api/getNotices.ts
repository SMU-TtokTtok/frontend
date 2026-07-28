import { mainClient } from '@/common/apis/ttockTtockClient';
import { API } from '@/common/constants/endpoints';
import { NoticesRequest, NoticesResponse } from '@/common/model/notice';

export const getNotices = async ({
  page = 1,
  size = 10,
  keyword,
}: NoticesRequest = {}): Promise<NoticesResponse> => {
  const params = new URLSearchParams({
    page: String(page),
    size: String(size),
  });

  if (keyword?.trim()) {
    params.append('keyword', keyword.trim());
  }

  const data = await mainClient.get<NoticesResponse>(
    `${API.USER.NOTICES}?${params.toString()}`,
  );

  return data;
};
