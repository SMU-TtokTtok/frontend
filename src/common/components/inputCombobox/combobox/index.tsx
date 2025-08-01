import { forwardRef } from 'react';
import * as S from './combobox.css';
import { ROUTES } from '@/common/constants/routes';
import Link from 'next/link';
import Empty from '../../empty';
import { convertToKor } from '@/common/util/convertToKor';

interface ComboboxProps<T> {
  comboBoxList: T[];
  handleSearchBarClose?: () => void;
  setIsComboBoxOpen: (isOpen: boolean) => void;
}

export default forwardRef<
  HTMLDivElement,
  ComboboxProps<{ id: string; name: string; clubType: string }>
>(function Combobox({ comboBoxList, handleSearchBarClose, setIsComboBoxOpen }, ref) {
  const handleClose = () => {
    handleSearchBarClose?.();
    setIsComboBoxOpen(false);
  };

  return (
    <div className={S.layout} ref={ref}>
      {comboBoxList.length > 0 && (
        <ul>
          {comboBoxList.map((item) => (
            <Link href={ROUTES.CLUB_INFO(item.id)} key={item.id}>
              <li key={item.id} className={S.comboBoxOption} onClick={handleClose}>
                <p>{item.name}</p>
                <span className={S.category}>{convertToKor(item.clubType)}</span>
              </li>
            </Link>
          ))}
        </ul>
      )}
      {comboBoxList.length === 0 && (
        <Empty className={S.emptyMessage}>
          검색결과가 없어요!
          <br /> 동아리명을 확인해주세요.
        </Empty>
      )}
    </div>
  );
});
