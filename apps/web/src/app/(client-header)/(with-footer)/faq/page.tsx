import type { Metadata } from 'next';
import FaqList from '@/components/faq';

export const metadata: Metadata = {
  title: '자주 묻는 질문',
  description: '똑똑 서비스 이용과 관련된 자주 묻는 질문을 확인하세요.',
};

export default function FaqPage() {
  return <FaqList />;
}
