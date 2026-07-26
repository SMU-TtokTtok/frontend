import type { Metadata } from 'next';
import { CustomHttpError } from '@/common/apis/apiClient';
import { getNoticeDetail } from '@/components/notice/api/getNoticeDetail';
import NoticeDetail from '@/components/notice/detail';

interface NoticeDetailPageProps {
  params: Promise<{
    noticeId: string;
  }>;
}

export const revalidate = 60;
export const dynamicParams = true;

const fetchNoticeDetail = async (noticeId: string) => {
  try {
    return await getNoticeDetail({ noticeId });
  } catch (error) {
    if (error instanceof CustomHttpError && error.status === 404) {
      throw new CustomHttpError(error.message, error.status);
    }

    throw error;
  }
};

export async function generateMetadata({ params }: NoticeDetailPageProps): Promise<Metadata> {
  const { noticeId } = await params;

  try {
    const notice = await getNoticeDetail({ noticeId });

    return {
      title: notice.title,
      description: notice.content,
    };
  } catch {
    return {
      title: '공지사항 상세',
      description: '똑똑 서비스 공지사항 상세 내용을 확인하세요.',
    };
  }
}

export default async function NoticeDetailPage({ params }: NoticeDetailPageProps) {
  const { noticeId } = await params;

  return <NoticeDetail noticeId={noticeId} />;
}
