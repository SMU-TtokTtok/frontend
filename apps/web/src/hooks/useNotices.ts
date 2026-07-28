import { useQuery } from '@tanstack/react-query';
import { getNoticeDetail } from '@/components/notice/api/getNoticeDetail';
import { getNotices } from '@/components/notice/api/getNotices';
import { NoticeDetailRequest, NoticesRequest } from '@/common/model/notice';
import { noticeKey } from './queries/key';

export const useNotices = ({ page = 1, size = 10, keyword }: NoticesRequest = {}) => {
  const { data, isLoading, isError, error, refetch } = useQuery({
    queryKey: [...noticeKey.list, page, size, keyword ?? ''],
    queryFn: () => getNotices({ page, size, keyword }),
  });

  return { data, isLoading, isError, error, refetch };
};

export const useNoticeDetail = ({
  noticeId,
  enabled = true,
}: NoticeDetailRequest & { enabled?: boolean }) => {
  const { data, isLoading, isPending, isError, error, refetch } = useQuery({
    queryKey: [...noticeKey.detail, noticeId],
    queryFn: () => getNoticeDetail({ noticeId }),
    enabled: enabled && !!noticeId,
  });

  return { data, isLoading, isPending, isError, error, refetch };
};
