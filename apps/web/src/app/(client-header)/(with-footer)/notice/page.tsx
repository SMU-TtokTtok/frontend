import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '공지사항',
  description: '똑똑 서비스의 주요 공지사항과 업데이트를 확인하세요.',
};

export default function NoticePage() {
  return <div>
    <h1>공지사항</h1>
    <p>공지사항 내용</p>
  </div>;
}
