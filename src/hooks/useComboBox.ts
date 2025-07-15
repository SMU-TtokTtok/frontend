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

  const handleNavigate = () => {
    router.push(ROUTES.SEARCH(debouncedSearch));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleNavigate();
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
