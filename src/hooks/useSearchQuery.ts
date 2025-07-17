'use client';
import { useSearchParams } from 'next/navigation';

export interface SearchQueryReturn {
  category?: string;
  recruit?: string;
  type?: string;
  sort?: string;
  grade?: string;
  college?: string;
  name?: string;
}

export const useSearchQuery = () => {
  const searchParams = useSearchParams();

  const filter: SearchQueryReturn = {
    category: searchParams.get('category') || '',
    recruit: searchParams.get('recruit') || '',
    type: searchParams.get('type') || '',
    sort: searchParams.get('sort') || '',
    grade: searchParams.get('grade') || '',
    college: searchParams.get('college') || '',
    name: searchParams.get('name') || '',
  };
  return { filter };
};
