import { ROUTES } from '@/common/constants/routes';
import { Button } from '@ttockttock/ui';
import Header from '@/common/ui/header';
import Image from 'next/image';
import Link from 'next/link';
import Mainlogo from '@/assets/mainlogo_wh.svg';
import * as S from './clientHeader.css';
import InputCombobox from '../../inputCombobox';
import DropDown from '../../dropdown';
import SearchIcon from '@/assets/search.svg';
import DropdownIcon from '@/assets/dropdown.svg';
import PersonWhiteIcon from '@/assets/user-round.svg';
import { useLogoutMutation } from '@/hooks/useUserMutaion';

interface DesktopProps<T> {
  isVisible: boolean;
  isComboBoxOpen: boolean;
  setIsComboBoxOpen: (isOpen: boolean) => void;
  handleSearchChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleNavigate: () => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  searchList: T[];
  userName: string | null;
}

function Desktop<T extends { id: string; name: string; clubType: string }>({
  isVisible,
  isComboBoxOpen,
  setIsComboBoxOpen,
  handleSearchChange,
  handleNavigate,
  handleKeyDown,
  searchList,
  userName,
}: DesktopProps<T>) {
  const { handleLogout } = useLogoutMutation();
  const dropdownIconClassName = (open: boolean) =>
    `${S.UserDropdownIcon} ${open ? S.UserDropdownIconOpen : ''}`;

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
          placeholder="동아리 이름을 검색해보세요."
          aria-label="동아리 이름을 검색해보세요."
        />
        <Link href={ROUTES.NOTICE}>
          <Button className={S.SupportButton} variant="primary">
            공지사항
          </Button>
        </Link>
        <Link href={ROUTES.FAQ}>
          <Button className={S.SupportButton} variant="primary">
            자주 묻는 질문
          </Button>
        </Link>
        {userName ? (
          <>
            <DropDown
              panelClassName={S.UserDropdownPanel}
              toggleButton={(open) => (
                <div className={S.PersonWrapper}>
                  <Image src={PersonWhiteIcon} alt="person_white" width={20} height={20} />
                  <p className={S.Nametext}>{userName}님</p>
                  <Image
                    src={DropdownIcon}
                    alt="드롭다운"
                    className={dropdownIconClassName(open)}
                  />
                </div>
              )}
            >
              <Link href={ROUTES.APPLIED}>
                <li className={S.UserDropdownItem}>내 지원내역</li>
              </Link>
              <Link href={ROUTES.FAVORITES}>
                <li className={S.UserDropdownItem}>즐겨찾기</li>
              </Link>
              <Link href={ROUTES.ADMIN_LOGIN}>
                <li className={S.UserDropdownItem}>동아리 로그인</li>
              </Link>
              <li className={S.UserDropdownItem} onClick={handleLogout}>
                로그아웃
              </li>
            </DropDown>
          </>
        ) : (
          <DropDown
            panelClassName={S.AuthDropdownPanel}
            toggleButton={(open) => (
              <Button className={S.AuthButton} variant="primary">
                <Image src={PersonWhiteIcon} alt="person_white" width={20} height={20} />
                로그인
                <Image src={DropdownIcon} alt="" className={dropdownIconClassName(open)} />
              </Button>
            )}
          >
            <Link href={ROUTES.LOGIN}>
              <li className={S.UserDropdownItem}>로그인</li>
            </Link>
            <Link href={ROUTES.SIGNUP}>
              <li className={S.UserDropdownItem}>회원가입</li>
            </Link>
            <Link href={ROUTES.ADMIN_LOGIN}>
              <li className={S.UserDropdownItem}>동아리 로그인</li>
            </Link>
          </DropDown>
        )}
      </div>
    </Header>
  );
}

export default Desktop;
