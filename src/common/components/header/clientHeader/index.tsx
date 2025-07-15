'use client';
import { ROUTES } from '@/common/constants/routes';
import Button from '@/common/ui/button';
import Header from '@/common/ui/header';
import { useScrollObserver } from '@/hooks/useScrollObserver';
import Image from 'next/image';
import Link from 'next/link';
import mainlogo from '@/assets/mainlogo_wh.svg';
import * as S from './clientHeader.css';
import { useSearchClubInfinite } from '@/hooks/useSearchClubInfinite';
import { useDebounce } from '@/hooks/useDebounce';
import { useEffect, useState } from 'react';
import InputCombobox from '../../inputCombobox';
import SearchIcon from '@/assets/search.svg';
import { useRouter } from 'next/navigation';

function ClientHeader() {
  const router = useRouter();
  const isVisible = useScrollObserver();
  const [searchdata, setSearchData] = useState('');
  const debouncedSearch = useDebounce(searchdata);
  const [isComboBoxOpen, setIsComboBoxOpen] = useState<boolean>(!!debouncedSearch);

  const { data: searchList } = useSearchClubInfinite({ debouncedSearch });
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value);
    console.log('Search Input Changed:', isComboBoxOpen);
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

  return (
    <Header isVisible={isVisible} className={S.InnerWrapper}>
      <Link href={ROUTES.HOME}>
        <Image src={mainlogo} className={S.Logo} alt="Main Logo" />
      </Link>
      <div className={S.RightArea}>
        <InputCombobox
          className={S.InputCombobox}
          img={SearchIcon}
          iconStyle={S.searchIcon}
          comboBoxList={searchList}
          isComboBoxOpen={isComboBoxOpen}
          setIsComboBoxOpen={setIsComboBoxOpen}
          onChange={handleSearchChange}
          onClick={handleNavigate}
          onKeyDown={handleKeyDown}
          placeholder="동아리 이름을 검색하세요."
        />
        <Link href={ROUTES.LOGIN}>
          <Button className={S.ButtonStyle} variant="secondary">
            로그인
          </Button>
        </Link>
        <Link href={ROUTES.SIGNUP}>
          <Button className={S.ButtonStyle} variant="secondary">
            회원가입
          </Button>
        </Link>
      </div>
    </Header>
  );
}

export default ClientHeader;
