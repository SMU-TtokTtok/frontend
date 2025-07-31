'use client';
import { useSearchParams } from 'next/navigation';

export interface SearchQueryReturn {
  category?: string;
  recruiting?: string;
  type?: string;
  sort?: string;
  grades?: string;
  college?: string;
  name?: string;
}

export const useSearchQuery = () => {
  const searchParams = useSearchParams();

  const filter: SearchQueryReturn = {
    category: searchParams.get('category') || '',
    recruiting: searchParams.get('recruiting') || '',
    type: searchParams.get('type') || '',
    sort: searchParams.get('sort') || '',
    grades: searchParams.get('grades') || '',
    college: searchParams.get('college') || '',
    name: searchParams.get('name') || '',
  };
  return { filter };
};
