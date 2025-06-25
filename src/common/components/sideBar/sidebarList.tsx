'use client';
import { ADMIN_SIDEBAR_ITEMS } from '@/common/constants';
import SidebarItem from './sidebarItem';
import { usePathname } from 'next/navigation';
import * as S from '@/common/components/sideBar/sidebar.css';

function SidebarList() {
  const pathName = usePathname();

  return (
    <ul>
      <p className={S.sidebarTitle}>동아리 관리</p>

      {ADMIN_SIDEBAR_ITEMS.slice(0, 2).map((item) => (
        <SidebarItem
          img={item.img}
          key={item.label}
          label={item.label}
          href={item.href}
          pathName={pathName}
        />
      ))}
      <p className={S.sidebarTitle}>지원자 현황 관리</p>

      {ADMIN_SIDEBAR_ITEMS.slice(2, 4).map((item) => (
        <SidebarItem
          img={item.img}
          key={item.label}
          label={item.label}
          href={item.href}
          pathName={pathName}
        />
      ))}
    </ul>
  );
}

export default SidebarList;
