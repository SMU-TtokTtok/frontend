import { ROUTES } from '@/common/constants/routes';
import Button from '@/common/ui/button';
import Header from '@/common/ui/header';
import Image from 'next/image';
import Link from 'next/link';
import Mainlogo from '@/assets/mainlogo_wh.svg';
import * as S from './clientHeader.css';
import InputCombobox from '../../inputCombobox';
import SearchIcon from '@/assets/search.svg';
interface DesktopProps<T> {
  isVisible: boolean;
  isComboBoxOpen: boolean;
  setIsComboBoxOpen: (isOpen: boolean) => void;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNavigate: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  searchList: T[];
}

function Desktop<T extends { id: string; name: string; clubType: string }>({
  isVisible,
  isComboBoxOpen,
  setIsComboBoxOpen,
  handleSearchChange,
  handleNavigate,
  handleKeyDown,
  searchList,
}: DesktopProps<T>) {
  return (
    <Header isVisible={isVisible} className={S.DesktopInnerWrapper}>
      <Link href={ROUTES.HOME}>
        <Image src={Mainlogo} className={S.Logo} alt="Main Logo" />
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

export default Desktop;
