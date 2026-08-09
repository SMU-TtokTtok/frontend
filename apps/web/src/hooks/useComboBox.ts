import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useDebounce } from './useDebounce';
import { ROUTES } from '@/common/constants/routes';

export const useCombobox = () => {
  const router = useRouter();
  const [searchdata, setSearchData] = useState('');
  const debouncedSearch = useDebounce(searchdata);
  const [isComboBoxOpen, setIsComboBoxOpen] = useState<boolean>(!!debouncedSearch);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
  };

  useEffect(() => {
    setIsComboBoxOpen(!!debouncedSearch);
  }, [debouncedSearch]);

  const handleNavigate = (keyword?: string) => {
    const searchKeyword = typeof keyword === 'string' ? keyword : searchdata;
    router.push(ROUTES.SEARCH(searchKeyword.trim()));
    router.refresh();
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleNavigate(e.currentTarget.value);
    }
  };

  return {
    searchdata,
    debouncedSearch,
    isComboBoxOpen,
    setIsComboBoxOpen,
    handleSearchChange,
    handleNavigate,
    handleKeyDown,
  };
};
