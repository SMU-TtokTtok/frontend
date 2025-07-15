import { forwardRef } from 'react';
import * as S from './combobox.css';
import { ROUTES } from '@/common/constants/routes';
import Link from 'next/link';
import Empty from '../../empty';

interface ComboboxProps<T> {
  comboBoxList: T[];
}

export default forwardRef<
  HTMLDivElement,
  ComboboxProps<{ id: number; name: string; separation: string }>
>(function Combobox({ comboBoxList }, ref) {
  return (
    <div className={S.layout} ref={ref}>
      {comboBoxList.length > 0 && (
        <ul>
          {comboBoxList.map((item) => (
            <Link href={ROUTES.CLUB_INFO(item.id)} key={item.id}>
              <li key={item.id} className={S.comboBoxOption}>
                <p>{item.name}</p>
                <span className={S.category}>{item.separation}</span>
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
