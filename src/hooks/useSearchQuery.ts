'use client';
import { useSearchParams } from 'next/navigation';

export interface SearchQueryReturn {
  category?: string;
  recruiting?: string;
  type?: string;
  sort?: string;
  grades?: string;
  clubUniv?: string;
  name?: string;
}

export const useSearchQuery = () => {
  const searchParams = useSearchParams();

  const filter: SearchQueryReturn = {
    category: searchParams.get('category') || undefined,
    recruiting: searchParams.get('recruiting') || undefined,
    type: searchParams.get('type') || undefined,
    sort: searchParams.get('sort') || undefined,
    grades: searchParams.get('grades') || undefined,
    clubUniv: searchParams.get('clubUniv') || undefined,
    name: searchParams.get('name') || undefined,
  };
  return { filter };
};
