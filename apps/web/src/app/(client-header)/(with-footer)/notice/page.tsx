import type { Metadata } from 'next';
import Notice from '@/components/notice';

export const metadata: Metadata = {
  title: '공지사항',
  description: '똑똑 서비스의 주요 공지사항과 업데이트를 확인하세요.',
};

export default function NoticePage() {
  return <Notice />;
}
